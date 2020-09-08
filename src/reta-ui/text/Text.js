import React from 'react'
import { withCommonProps } from '../hoc';
import PropTypes from 'prop-types';

const Text = ({
  as = 'p',
  children,
  ...restProps
}) => React.createElement(as, restProps, children);

Text.propTypes = {
  as: PropTypes.string
}

export default withCommonProps(Text);
