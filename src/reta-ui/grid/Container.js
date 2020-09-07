import React from 'react';
import classnames from 'classnames';
import { withCommonProps } from '../hoc';
import PropTypes from 'prop-types';

const Container = ({ auto, className, children }) => {
  const classNames = classnames(className, 'container', {
    'mx-auto': auto,
  });

  return React.createElement('div', { className: classNames }, children);
};

Container.propTypes = {
  auto: PropTypes.string
}

export default withCommonProps(Container);
