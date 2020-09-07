import React from 'react';
import classnames from 'classnames';
import withCommonProps from '../hoc/withCommonProps';
import PropTypes from 'prop-types'

const Col = ({
  span,
  start,
  end,
  sm,
  md,
  lg,
  xl,
  className,
  children,
}) => {
  const classNames = classnames(className, {
    'col-auto': span === 'auto',
    [`col-span-${span}`]: span,
    [`col-start-${span}`]: start,
    [`col-end-${end}`]: end,
    [`sm:col-span-${span}`]: sm,
    [`md:col-span-${span}`]: md,
    [`lg:col-span-${span}`]: lg,
    [`xl:col-span-${span}`]: xl,
  });

  return React.createElement('div', { className: classNames }, children);
};

Col.propTypes = {
  span: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  start: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  end: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default withCommonProps(Col);
