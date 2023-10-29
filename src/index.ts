import { checkLocal } from "./local";
import { checkGlobal } from "./global";
import { File } from "./file";
import constants from "./constants";

export function get<T>(key: string) {
  return new Promise<T>((resolve, reject) => {
    const local = new File(process.cwd(), "/.keep");
    const global = new File(constants.globaldir, ".keep");

    const globalChecking = () => {
      if (global.raw_exists()) {
        checkGlobal<T>(global, key)
          .then((value) => {
            resolve(value);
          })
          .catch((r) => {
            if (r === 404) {
              reject(`${key} was not found!`);
            }
          });
      }
    };

    if (local.raw_exists()) {
      checkLocal<T>(local, key)
        .then((value) => {
          resolve(value);
        })
        .catch((r) => {
          if (r === 404) {
            globalChecking();
          }
        });
    } else {
      globalChecking();
    }

    if (!global.raw_exists() && !local.raw_exists()) {
      reject(`no .keep was found.`);
    }
  });
}

export { constants };
