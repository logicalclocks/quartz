import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Box, Flex } from 'rebass';
import ResizeObserver from 'resize-observer-polyfill';
import {
  summaryContainerStyles,
  containerStyles,
  tabsStyles,
  buttonsContainerStyles,
  gradientStyles,
} from './form-tabs.styles';
import FormSummaryContainer from '../form-summary-container';
import Tab from './tab/Tab';
import Button from '../button';
import { TabState } from './types';

export enum ValidateOpts {
  valid = 'valid',
  error = 'error',
  untouched = 'untouched',
}

export interface TabItem {
  id: string;
  title: string;
  optional?: boolean;
  submit?: boolean;
  state?: TabState;
  validationFn: () => ValidateOpts;
}

export interface FormTabsProps {
  tabs: TabItem[];
  SubmitButton: FC<any>;
  initialTab?: string;
  onTabChange: (tabId: string) => void;
  hasScrollOnScreen?: boolean;
}

const FormTabs: FC<FormTabsProps> = ({
  tabs,
  SubmitButton,
  onTabChange,
  initialTab,
  hasScrollOnScreen = true,
  ...props
}: FormTabsProps) => {
  const initialActive = useMemo(() => {
    const tabIdx = tabs.findIndex((t) => t.id === initialTab);
    return Math.max(tabIdx, 0);
  }, [initialTab, tabs]);

  const tabsContainerRef = useRef<HTMLElement>(null);

  const hasOverflow = useCallback(() => {
    const el = tabsContainerRef?.current;
    return el ? el.clientWidth !== el.scrollWidth : false;
  }, [tabsContainerRef?.current]);

  const [active, setActive] = useState<number>(initialActive);
  const [tabArray, setTabArray] = useState<TabItem[]>(tabs);
  const [isOverflown, setIsOverflown] = useState<boolean>(false);

  const currentTab = useMemo(() => tabArray[active], [tabArray, active]);

  const handleGoForward = useCallback(async () => {
    const validation = await currentTab.validationFn();
    const copy = [...tabArray.map((x) => x)];

    // VALID: move to next tab and show check mark.
    if (validation === ValidateOpts.valid) {
      copy[active] = { ...copy[active], state: TabState.valid };
      onTabChange(copy[active + 1].id);
      setActive((act) => act + 1);
    }

    // UNTOUCHED: if optional, move to next tab. Otherwise show error.
    if (validation === ValidateOpts.untouched) {
      if (currentTab.optional) {
        copy[active] = { ...copy[active], state: TabState.optional };
        onTabChange(copy[active + 1].id);
        setActive((act) => act + 1);
      } else {
        copy[active] = { ...copy[active], state: TabState.error };
      }
    }

    // INVALID: don't move to next tab and show error.
    if (validation === ValidateOpts.error) {
      copy[active] = { ...copy[active], state: TabState.error };
    }
    setTabArray(copy);
  }, [setActive, active, setTabArray, tabArray, onTabChange, currentTab]);

  const handleGoBack = useCallback(() => {
    onTabChange(tabArray[active - 1].id);
    setActive((act) => act - 1);
  }, [active, onTabChange, setActive]);

  const handleTabClick = useCallback(
    (idx: number) => {
      setActive(idx);
      onTabChange(tabArray[idx].id);
    },
    [setActive, onTabChange],
  );

  const handleSubmit = useCallback(async () => {
    /*
      When trying to submit the form whe check all the previous tabs to see.
      If they haven't been checked we trigger the validation and update the state.
      If there's any wrong we return false;
     */
    let allValid = true;
    const updated = await Promise.all(
      tabArray.map(async (tab) => {
        const validation = await tab.validationFn();
        /*
          For all the no-submit tabs we validate them.
          If they are optional we only change their status if there is an error
          For the rest we either set them as error or valid.
         */
        if (!tab.submit) {
          if (!tab.optional && validation === ValidateOpts.valid) {
            return { ...tab, state: TabState.valid };
          }
          if (validation === ValidateOpts.error) {
            allValid = false;
            return { ...tab, state: TabState.error };
          }
          return tab;
        }
        return tab;
      }),
    );
    setTabArray(updated);
    return allValid;
  }, []);

  useEffect(() => {
    if (!tabsContainerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setIsOverflown(hasOverflow());
    });
    resizeObserver.observe(tabsContainerRef.current);
    // eslint-disable-next-line consistent-return
    return () => resizeObserver.disconnect();
  }, [tabsContainerRef?.current]);

  return (
    <FormSummaryContainer
      style={summaryContainerStyles}
      hasScrollOnScreen={hasScrollOnScreen}
      {...props}
    >
      <Flex sx={containerStyles}>
        <Flex ref={tabsContainerRef} sx={tabsStyles}>
          {tabArray.map(({ title, optional, state, id }, idx) => (
            <Tab
              key={id}
              onClick={() => handleTabClick(idx)}
              title={title}
              active={idx === active}
              state={state || (optional ? TabState.optional : TabState.default)}
            />
          ))}
        </Flex>
        <Flex sx={buttonsContainerStyles}>
          {isOverflown && <Box sx={gradientStyles} />}
          <Flex>
            {active > 0 && (
              <Button intent="secondary" mr="20px" onClick={handleGoBack}>
                Back
              </Button>
            )}
            {active === tabs.length - 1 ? (
              <SubmitButton validateAll={handleSubmit} />
            ) : (
              <Button onClick={handleGoForward}>Next</Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </FormSummaryContainer>
  );
};

export default FormTabs;
