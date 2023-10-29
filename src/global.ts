import constants from "./constants";
import { File } from "./file";
import { decrypt } from "./handlers/decryption";

export async function checkGlobal<T>(file: File, key: string) {
  return new Promise<T>((resolve, reject) => {
    file
      .read()
      .then((data) => {
        return decrypt({ encrypted: data, folder: constants.globaldir });
      })
      .then((data: string) => {
        const content = JSON.parse(data);
        resolve(content[key]);
      })
      .catch(reject);
  });
}
