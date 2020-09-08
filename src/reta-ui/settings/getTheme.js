import resolveConfig from 'tailwindcss/resolveConfig';
import { pathOr } from 'ramda';
const { theme } = resolveConfig('@/tailwind.config.js');

export default (key, defaultValue = null) => {
  if (!key) return theme;
  return pathOr(defaultValue, [...key.split('.')], theme);
}