import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            indent: ["error", 4],                 // 4 espaços
            quotes: ["error", "double"],          // aspas duplas
            semi: ["error", "always"],            // ponto e vírgula obrigatório
            "react/jsx-indent": ["error", 4],     // JSX com 4 espaços
            "react/jsx-indent-props": ["error", 4],
        },
    },
    // Override default ignores of eslint-config-next.
    globalIgnores([

        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
]);

export default eslintConfig;
