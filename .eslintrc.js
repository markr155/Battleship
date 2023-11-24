module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      env: {
        node: true,
        jest: true,
      },
      files: [".eslintrc.{js,cjs}", "**/*.test.js", "**/*.config.js"],
      parserOptions: {
        sourceType: "module",
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
};
