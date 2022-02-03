import React from 'react';
import { IconName } from '../../..';
import Icon from '../../icon';

export default {
  check: (
    <Icon icon={IconName.validate} color="primary" size="sm" />
  ),
  error: (
    <Icon icon={IconName.error} color="labels.red" size="sm" />
  ),
};
