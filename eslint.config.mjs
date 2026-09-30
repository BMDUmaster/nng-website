import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    ".next.nosync/**",
    "node_modules/**",
    "node_modules.nosync/**",
    "out/**",
    "public/_next/**",
    "public/_rsc/**",
    "_archive/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
