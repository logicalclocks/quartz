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
  title: string;
  optional: boolean;
  state?: TabState;
  validationFn: () => boolean;
}

export interface FormTabsProps {
  tabs: TabItem[];
  submitButton: ReactNode;
  hasScrollOnScreen?: boolean;
}

const FormTabs: FC<FormTabsProps> = ({
  tabs,
  submitButton,
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
      setActive((act) => act + 1);
    } else {
      copy[active] = { ...copy[active], state: TabState.error };
    }
    setTabArray(copy);
  }, [setActive, active, setTabArray, tabArray]);

  const handleGoBack = useCallback(() => {
    setActive((act) => act - 1);
  }, [setActive]);

  return (
    <FormSummaryContainer
      style={summaryContainerStyles}
      hasScrollOnScreen={hasScrollOnScreen}
      {...props}
    >
      <Flex sx={containerStyles}>
        <Flex sx={tabsStyles}>
          {tabArray.map(({ title, optional, state }, idx) => (
            <Tab
              key={title}
              onClick={() => setActive(idx)}
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
