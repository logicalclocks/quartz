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

export interface TabItem {
  id: string;
  title: string;
  optional: boolean;
  state?: TabState;
  validationFn: () => boolean;
}

export interface FormTabsProps {
  tabs: TabItem[];
  submitButton: ReactNode;
  onTabChange: (tabId: string) => void;
  hasScrollOnScreen?: boolean;
}

const FormTabs: FC<FormTabsProps> = ({
  tabs,
  submitButton,
  onTabChange,
  hasScrollOnScreen = true,
  ...props
}: FormTabsProps) => {
  const [active, setActive] = useState<number>(0);
  const [tabArray, setTabArray] = useState<TabItem[]>(tabs);

  const currentTab = useMemo(() => tabArray[active], [tabArray, active]);

  const handleGoForward = useCallback(() => {
    const isValid = currentTab.validationFn();
    const copy = [...tabArray.map((x) => x)];
    if (isValid) {
      copy[active] = { ...copy[active], state: TabState.valid };
      onTabChange(copy[active + 1].id);
      setActive((act) => act + 1);
    } else {
      copy[active] = { ...copy[active], state: TabState.error };
    }
    setTabArray(copy);
  }, [setActive, active, setTabArray, tabArray]);

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
