
module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        plugins: {
            jsdoc: require("eslint-plugin-jsdoc"),
        },
        rules: {
            // Allow lines up to 120 characters.
            "max-len": ["error", { code: 150 }],
            // Enforce arrow functions for callbacks.
            "prefer-arrow-callback": "error",
            // Require function expressions instead of declarations.
            "func-style": ["error", "expression"],
            // Use concise arrow function syntax when possible.
            "arrow-parens": ["error", "as-needed"],
            // Enforce spacing inside curly braces.
            "object-curly-spacing": ["error", "always"],
            // Require trailing commas for multiline blocks.
            "comma-dangle": ["error", "always-multiline"],
            // Always require semicolons.
            "semi": ["error", "always"],
            // Disable warnings for class methods that don't use "this".
            "class-methods-use-this": "off",
            // JSDoc rules to enforce the nested style.
            "jsdoc/check-tag-names": "error",
            "jsdoc/check-param-names": "error",
        },
        linterOptions: {
            // Allow inline ESLint config comments.
            noInlineConfig: false,
            // Report unused disable directives as warnings.
            reportUnusedDisableDirectives: "warn",
        },
    },
];
