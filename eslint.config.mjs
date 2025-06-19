import { defineConfig } from "eslint/config";
import boundaries from "eslint-plugin-boundaries";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("next/core-web-vitals", "next/typescript"),

    plugins: {
        boundaries,
    },

    settings: {
        "boundaries/include": ["**/*"],
        "boundaries/ignore": ["node_modules/**/*"],

        "boundaries/elements": [{
            mode: "full",
            type: "shared",

            pattern: [
                "components/**/*",
                "data/**/*",
                "utils/**/*",
                "hooks/**/*",
                "lib/**/*",
                "types/**/*",
                "styles/**/*",
                "locales/**/*",
                "providers/**/*",
                "assets/**/*",
                "stories/**/*",
            ],
        }, {
            mode: "full",
            type: "feature",
            capture: ["featureName"],
            pattern: ["features/*/**/*"],
        }, {
            mode: "full",
            type: "app",
            capture: ["_", "fileName"],
            pattern: ["app/**/*"],
        }, {
            mode: "full",
            type: "neverImport",
            pattern: ["*", "tasks/**/*"],
        }, {
            mode: "full",
            type: "test",
            pattern: ["__tests__/**/*", "**/*.test.{ts,tsx,js,jsx}", "**/*.spec.{ts,tsx,js,jsx}"],
        }],
    },

    rules: {
        "boundaries/no-unknown": ["error"],
        "boundaries/no-unknown-files": ["error"],

        "boundaries/element-types": ["error", {
            default: "disallow",

            rules: [{
                from: ["test"],
                allow: ["shared", "feature", "app"],
            }, {
                from: ["shared"],
                allow: ["shared"],
            }, {
                from: ["feature"],

                allow: ["shared", ["feature", {
                    featureName: "${from.featureName}",
                }], ["app", {
                    fileName: "request.ts",
                }]],
            }, {
                from: ["app", "neverImport"],
                allow: ["shared", "feature"],
            }, {
                from: ["app"],

                allow: [["app", {
                    fileName: "*.css",
                }]],
            }],
        }],
    },
}]);