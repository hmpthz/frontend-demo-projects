import { FlatCompat } from '@eslint/eslintrc';
import { preset, extended } from '../../eslint.base.js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});
const compatNextVitals = [
  ...compat.config({
    extends: ['next/core-web-vitals'],
  }),
  {
    rules: {
      '@next/next/no-img-element': 0,
    },
  },
];

const config = [
  preset.prettierConfig,
  ...preset.baseConfigs,
  ...compatNextVitals,
  ...extended.baseConfigs,
  extended.jsxConfig,
];

export default config;
