import { execFileSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { buildSync } from "esbuild";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(scriptDir, "..");
const grammarPath = resolve(rootDir, "peggyjs/chord2mml_chord2ast.pegjs");
const temporaryPath = resolve(rootDir, "src/.chord2mml_chord2ast.generated.cjs");
const outputPath = resolve(rootDir, "src/chord2mml_chord2ast.cjs");

try {
  execFileSync(process.execPath, [createRequire(import.meta.url).resolve("peggy/bin/peggy.js"), grammarPath, "--output", temporaryPath], { stdio: "inherit" });
  buildSync({ entryPoints: [temporaryPath], minify: true, format: "cjs", platform: "node", outfile: outputPath, logLevel: "info" });
} finally {
  if (existsSync(temporaryPath)) {
    rmSync(temporaryPath);
  }
}
