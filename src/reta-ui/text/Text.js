import React from 'react'
import { withCommonProps } from '../hoc';

const Text = ({
  as = 'p',
  children,
  ...restProps
}) => React.createElement(as, restProps, children)

export default withCommonProps(Text);
