import React from 'react';
import { pick, propOr } from 'ramda';
import classnames from 'classnames';
import {
  generateCommonClasses,
  generateClassesWithReplaceKey
} from '../tools/classGenerator';

const withCommonProps = (Component) => {
  const component = (props) => {
    const commonProps = pick([
      'p',
      'pt',
      'pb',
      'pr',
      'pl',
      'px',
      'py',
      'm',
      'mt',
      'mb',
      'mr',
      'ml',
      'mx',
      'my',
      'bg',
      'font'
    ])(props);
  
    const classNames = classnames(
      propOr(null, 'className', props),
      generateCommonClasses(commonProps),
      generateClassesWithReplaceKey(pick(['textColor'], props), /Color/g),
      generateClassesWithReplaceKey(pick(['textSize'], props), /Size/g)
    );

    return <Component className={classNames} {...props} />
  };
  component.displayName = getDisplayName(component);
  return component;
}

const getDisplayName = (Component) => {
  return Component.displayName || Component.name || 'unamed component';
}
export default withCommonProps;
