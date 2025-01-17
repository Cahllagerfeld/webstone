import type { Adapter } from "./types";

import { print } from "@webstone/gluegun";
import remove from "../../../package-manager/remove";

export default async (adapter: Adapter) => {
  const spinner = print.spin(
    `Removing adapter package "${adapter.npmPackage}"...`
  );
  await remove(adapter.npmPackage, {
    dev: true,
    dir: "./",
  });
  spinner.succeed(`Adapter removed: ${adapter.npmPackage}`);
};
