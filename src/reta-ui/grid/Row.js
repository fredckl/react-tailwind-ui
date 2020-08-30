import React from 'react';
import classnames from 'classnames';

const Row = ({
  cols,
  gap,
  sm,
  md,
  lg,
  xl,
  className,
  children
}) => {
  const classNames = classnames(className, 'grid', {
    [`grid-cols-${cols}`]: cols,
    [`gap-${gap}`]: gap,
    [`sm:grid-cols-${sm}`]: sm,
    [`md:grid-cols-${md}`]: md,
    [`lg:grid-cols-${lg}`]: lg,
    [`xl:grid-cols-${xl}`]: xl,
  })
  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

export default Row
