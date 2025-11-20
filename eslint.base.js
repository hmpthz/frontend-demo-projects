import { defineConfig } from 'eslint/config';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import unusedImports from 'eslint-plugin-unused-imports';

export const preset = {
  prettierConfig: prettier,
  baseConfigs: [pluginJs.configs.recommended, ...tseslint.configs.recommended],
  reactConfig: pluginReact.configs.flat.recommended,
};

export const extended = {
  baseConfig: defineConfig({
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['**/dist/', '**/build/', '**/.next/'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      'no-unused-vars': 0,
      '@typescript-eslint/no-unused-vars': 0,
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  })[0],

  jsxConfig: defineConfig({
    plugins: {
      'unused-imports': unusedImports,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rulse: {
      'react/react-in-jsx-scope': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['to', 'hrefLeft', 'hrefRight'],
          aspects: ['noHref', 'invalidHref', 'preferButton'],
        },
      ],
    },
  })[0],
};
