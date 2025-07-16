import chalk from "chalk";
import { exec } from "child_process";
import pkg from "fs-extra";

console.log(chalk.green("Updating openapi files..."));

const { rmSync, existsSync, mkdirp } = pkg;

// cleaning openapi folder
const openapiDir = "src/lib/services/tmdp-api";
const vers = ["v3.0"];

for (const ver of vers) {
  const dir = `${openapiDir}/${ver}`;
  // Remove dir if exists
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true });
  }
  // Create dir
  mkdirp(dir);
}

exec(
  `npx openapi-generator-cli generate --generator-key ${vers.join(" ")}`,
  (err, stdout, stderr) => {
    if (err) {
      console.error(stderr);
      console.error(err);
      console.log(chalk.red(stdout));
    } else {
      console.log(chalk.green(stdout));
    }
  }
);
