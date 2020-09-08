import React from 'react';
import { pick, propOr } from 'ramda';
import classnames from 'classnames';
import {
  generateCommonClasses,
  generateClassesWithReplaceKey,
  generateClassesAndAddedKeyName,
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
      'font',
    ])(props);
    const classNames = classnames(
      propOr(null, 'className', props),
      generateCommonClasses(commonProps),
      generateClassesWithReplaceKey(/color/g, pick(['textcolor'], props)),
      generateClassesWithReplaceKey(/size/g, pick(['textsize'], props)),
      generateClassesAndAddedKeyName('border', props)
    );

    return <Component className={classNames} {...props} />;
  };

  component.displayName = getDisplayName(component);
  return component;
};

const getDisplayName = (Component) => {
  return Component.displayName || Component.name || 'unamed component';
};
export default withCommonProps;
