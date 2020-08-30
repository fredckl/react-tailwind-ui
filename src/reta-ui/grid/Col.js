import React from 'react'
import classnames from 'classnames'
import withCommonProps from '../hoc/withCommonProps';
const Col = ({
  span,
  start,
  end,
  auto,
  sm,
  md,
  lg,
  xl,
  className,
  children
}) => {
  const classNames = classnames(className, {
    [`col-${auto}`]: auto,
    [`col-span-${span}`]: span,
    [`col-start-${span}`]: start,
    [`col-end-${end}`]: end,
    [`sm:col-span-${span}`]: sm,
    [`md:col-span-${span}`]: md,
    [`lg:col-span-${span}`]: lg,
    [`xl:col-span-${span}`]: xl,
  })
  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

export default withCommonProps(Col);
