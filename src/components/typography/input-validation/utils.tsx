import React from 'react';
import { GetIcon, IconName } from '../../icon';

const icons: Record<string, React.ReactElement> = {
  success: <GetIcon icon={IconName.validate} color="primary" size="sm" />,
  warning: <GetIcon icon={IconName.warning} color="labels.orange" size="sm" />,
  neutral: <GetIcon icon={IconName.info} color="gray" size="sm" />,
};

export const getIcon = (intent: 'success' | 'fail' | 'warning' | 'neutral') => {
  return icons[intent];
};
