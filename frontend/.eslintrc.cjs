/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier/skip-formatting",
    ],
    overrides: [
        {
            files: ["cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}"],
            extends: ["plugin:cypress/recommended"],
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "prettier/prettier": [
            "warn",
            {
                tabWidth: 4,
                printWidth: 120,
            },
        ],
        "eol-last": "off",
        "max-lines": [
            "warn",
            {
                max: 500,
                skipComments: true,
                skipBlankLines: true,
            },
        ],
    },
};
