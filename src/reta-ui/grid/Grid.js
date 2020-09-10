import React from 'react';
import classnames from 'classnames';
import { withCommonProps } from '../hoc';
import PropTypes from 'prop-types';

const Grid = ({ cols, gap, sm, md, lg, xl, className, children }) => {
  const classNames = classnames(className, 'grid', {
    [`grid-cols-${cols}`]: cols,
    [`gap-${gap}`]: gap,
    [`sm:grid-cols-${sm}`]: sm,
    [`md:grid-cols-${md}`]: md,
    [`lg:grid-cols-${lg}`]: lg,
    [`xl:grid-cols-${xl}`]: xl,
  });

  return React.createElement('div', { className: classNames }, children);
};

Grid.propTypes = {
  cols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default withCommonProps(Grid);
