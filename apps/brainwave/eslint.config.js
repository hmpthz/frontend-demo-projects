import { preset, extended } from '../../eslint.base.js';

export default [
  preset.prettierConfig,
  ...preset.baseConfigs,
  preset.reactConfig,
  ...extended.baseConfigs,
  extended.jsxConfig,
];
