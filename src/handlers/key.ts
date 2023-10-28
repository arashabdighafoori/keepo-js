import constants from "../constants";
import { File } from "../file";

export default function get_key(folder: string) {
  return new Promise<string>((resolve, reject) => {
    const file = new File(constants.globaldir, `keys.json`);
    file
      .read()
      .then(JSON.parse)
      .then((data) => {
        if (folder in data) resolve(data[folder]);
        else {
          reject("not found");
        }
      })
      .catch(reject);
  });
}
