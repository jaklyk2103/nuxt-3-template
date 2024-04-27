module.exports = {
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "@nuxt/eslint-config",
    "prettier",
  ],
  root: true,
  ignorePatterns: ["**/*.js", "graphql/__generated__/**/*"],
  rules: {
    "import/no-extraneous-dependencies": "off",
  },
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
};
