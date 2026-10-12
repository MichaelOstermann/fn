import eslint from "@monstermann/eslint-config"

export default eslint().then(configs => [
    ...configs,
    {
        // Code in documentation is laid out by hand, for it to read well instead of fitting into 80 columns.
        files: ["**/*.md"],
        rules: {
            "format/prettier": ["error", { embeddedLanguageFormatting: "off", parser: "markdown", tabWidth: 4 }],
        },
    },
])
