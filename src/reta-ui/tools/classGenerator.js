import {
  isObj,
  isNotEmpty
} from 'ramda-adjunct';

import {
  compose,
  replace,
  map,
  toPairs,
  fromPairs,
  pick,
  when,
  assoc,
  is,
  zipObj,
  propOr
} from 'ramda';

const mergeKeyVal = (k, v, sep = '-') => `${k}${sep}${v}`;

export const generateCommonClasses = (props) => compose(
  fromPairs,
  map(v => ([mergeKeyVal(v[0], v[1]), v[1]])),
  when(isObj, toPairs)
)(props);

export const generateClassesWithReplaceKey = (replaceKey, props) => compose(
  fromPairs,
  map(v => ([mergeKeyVal(replace(replaceKey, '', v[0]), v[1]), v[1]])),
  toPairs,
)(props);

export const generateClassesAndAddedKeyName = (className, props) => compose(
  when(isNotEmpty, assoc(className, className)),
  generateCommonClasses,
  pick([className])
)(props);

export const generateClassesBorder = (props) => {
  const border = propOr(null, 'border', props);
  if (!border) return null;
  let classNames = {};
  console.log(border);
  let width = propOr(null, 'width', border);
  if (!width) return null;
  if (is(String, width)) width = [width];
  console.log(width);
  classNames = map(v => `border${v}`)(width);
  console.log('Classnames', classNames, width, props);
  const color = pick(['color']);

  // compose(

  //   pick(['border'])
  // )(props);
};
