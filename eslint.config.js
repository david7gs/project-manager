import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"],
    //"extends": ["eslint:all", "plugin:react/all"],
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    pluginJs: ["react"],
    plugins: ["react"],
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "no-unused-vars": "warn",
      "no-undef": "warn",
      indent: ["error", 2],
      "no-console": [0],
      semi: "error",
      "prefer-const": "error",
    },
  },
];
