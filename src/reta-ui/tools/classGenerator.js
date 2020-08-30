const {
  mergeAll,
  values,
  mapObjIndexed,
  compose,
  replace,
  map,
  toPairs,
  fromPairs
} = require("ramda");

export const generateCommonClasses = (props) => compose(
  mergeAll,
  values,
  mapObjIndexed((v, k) => ({ [`${k}-${v}`]: v }))
)(props);

export const generateClassesWithReplaceKey = (props, replaceKey) => compose(
  generateCommonClasses,
  fromPairs,
  map(v => ([replace(replaceKey, '', v[0]), v[1]])),
  toPairs
)(props)