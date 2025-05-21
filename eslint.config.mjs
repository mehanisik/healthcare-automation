import antfu from '@antfu/eslint-config';
// @ts-ignore
import nextPlugin from '@next/eslint-plugin-next';
// @ts-ignore
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default antfu(
  {
    react: true,
    typescript: true,

    // Configuration preferences
    lessOpinionated: true,
    isInEditor: false,

    // Code style
    stylistic: {
      semi: true,
    },

    // Format settings
    formatters: {
      css: true,
    },

    ignores: [
      'migrations/**/*',
      'node_modules/**/*',
      'public/**/*',
      'components/ui/**/*',
      '.cursor/**/*',
      '**/node_modules/**',
      'dist',
      '**/dist/**',
      'out',
      '**/out/**',
      '.gitignore',
      '**/.gitignore/**',
    ],
  },
  // --- Next.js Specific Rules ---
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  // --- Accessibility Rules ---
  jsxA11y.flatConfigs.recommended,
  // --- Testing Rules ---

  // --- Custom Rule Overrides ---
  {
    rules: {
      'antfu/no-top-level-await': 'off',
      'style/brace-style': ['error', '1tbs'],
      'ts/consistent-type-definitions': ['error', 'type'],
      'react/prefer-destructuring-assignment': 'off',
      'node/prefer-global/process': 'off',
    },
  },
);
