import resolveConfig from 'tailwindcss/resolveConfig';
import { pathOr } from 'ramda';
const { theme } = resolveConfig('@/tailwind.config.js');

const config = (key, defaultValue = null) => pathOr(defaultValue, [...key.split('.')], theme);
export default config;