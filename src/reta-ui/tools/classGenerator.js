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
  assoc
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
