import React from 'react';
import classnames from 'classnames';
import { withCommonProps } from '../hoc';

const Container = ({
  auto,
  className,
  children
}) => {
  const classNames = classnames(className, 'container', {
    [`mx-auto`]: auto
  });
  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

export default withCommonProps(Container);
