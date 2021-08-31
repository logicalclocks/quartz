import React, { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import { Flex } from 'rebass';
import {
  summaryContainerStyles,
  containerStyles,
  tabsStyles,
} from './form-tabs.styles';
import FormSummaryContainer from '../form-summary-container';
import Tab from './tab/Tab';
import { Button } from '../..';
import { TabState } from './tab/TabDescription';

export enum ValidateOpts {
  valid = 'valid',
  error = 'error',
  untouched = 'untouched',
}

export interface TabItem {
  id: string;
  title: string;
  optional: boolean;
  state?: TabState;
  validationFn: () => ValidateOpts;
}

export interface FormTabsProps {
  tabs: TabItem[];
  submitButton: ReactNode;
  initialTab?: string;
  onTabChange: (tabId: string) => void;
  hasScrollOnScreen?: boolean;
}

const FormTabs: FC<FormTabsProps> = ({
  tabs,
  submitButton,
  onTabChange,
  initialTab,
  hasScrollOnScreen = true,
  ...props
}: FormTabsProps) => {
  const initialActive = useMemo(() => {
    const tabIdx = tabs.findIndex((t) => t.id === initialTab);
    return Math.max(tabIdx, 0);
  }, [initialTab, tabs]);

  const [active, setActive] = useState<number>(initialActive);
  const [tabArray, setTabArray] = useState<TabItem[]>(tabs);

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

  return (
    <FormSummaryContainer
      style={summaryContainerStyles}
      hasScrollOnScreen={hasScrollOnScreen}
      {...props}
    >
      <Flex sx={containerStyles}>
        <Flex sx={tabsStyles}>
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
        <Flex>
          {active > 0 && (
            <Button intent="secondary" mr="20px" onClick={handleGoBack}>
              Back
            </Button>
          )}
          {active === tabs.length - 1 ? (
            submitButton
          ) : (
            <Button onClick={handleGoForward}>Next</Button>
          )}
        </Flex>
      </Flex>
    </FormSummaryContainer>
  );
};

export default FormTabs;
