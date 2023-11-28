export default [
  {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    parser: "@babel/eslint-parser",
    overrides: [
      {
        env: {
          node: true,
          jest: true,
        },
        files: [".eslintrc.{js,cjs}", "**/*.test.js", "**/*.config.js"],
        parserOptions: {
          sourceType: "module",
          ecmaVersion: 6,
        },
      },
    ],
    parserOptions: {
      ecmaVersion: "latest",
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },
];
