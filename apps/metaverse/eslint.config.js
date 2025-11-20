import nextVitals from 'eslint-config-next/core-web-vitals';
import { preset, extended } from '../../eslint.base';

export default [preset.prettierConfig, nextVitals, extended.baseConfig, extended.jsxConfig];
