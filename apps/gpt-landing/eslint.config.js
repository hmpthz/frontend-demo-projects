import { preset, extended } from '../../eslint.base';

export default [
  preset.prettierConfig,
  ...preset.baseConfigs,
  preset.reactConfig,
  extended.baseConfig,
  extended.jsxConfig,
];
