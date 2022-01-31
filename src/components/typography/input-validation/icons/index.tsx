import React from 'react';
import Icon from '../../../icon';
import { IconName } from '../../../icon/list';

export default {
  success: <Icon icon={IconName.validate} color="primary" size="sm"/>,
  warning: <Icon icon={IconName.warning} color="labels.orange" size="sm"/>,
  neutral: <Icon icon={IconName.info} color="gray" size="sm"/>
};
