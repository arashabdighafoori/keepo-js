import { File } from "./file";
import { decrypt } from "./handlers/decryption";

export async function checkLocal<T>(file: File, key: string) {
  return new Promise<T>((resolve, reject) => {
    file
      .read()
      .then((data) => {
        return decrypt({ encrypted: data, folder: process.cwd() });
      })
      .then((data: string) => {
        const content = JSON.parse(data);
        if (key in content) resolve(content[key]);
        else {
          reject(404);
        }
      })
      .catch(reject);
  });
}
