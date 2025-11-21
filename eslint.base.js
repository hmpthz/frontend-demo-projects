import { defineConfig, globalIgnores } from 'eslint/config';
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
  baseConfigs: defineConfig(
    {
      files: ['**/*.{ts,tsx,js,jsx}'],
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
    },
    globalIgnores(['**/dist/', '**/build/', '**/.next/', '**/next-env.d.ts'])
  ),

  jsxConfig: defineConfig({
    plugins: {
      'unused-imports': unusedImports,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/prop-types': 0,
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
