/**
 * @type {import('prettier').Config}
 */
const config = {
    arrowParens: "always",
    printWidth: 80,
    singleQuote: false,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: "all",
    tabWidth: 8, // open to discussion x)
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};

module.exports = config;
