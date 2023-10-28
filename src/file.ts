import fs from "fs";

export class File {
  constructor(public dir: string, public file: string) {}

  public raw_exists() {
    return fs.existsSync(this.dir + this.file);
  }

  public read() {
    return new Promise<string>((resolve, reject) => {
      fs.readFile(
        `${this.dir}${this.file}`,
        { encoding: "utf8" },
        (err, buf) => {
          if (!err) {
            resolve(buf.toString());
          } else {
            reject(err);
          }
        }
      );
    });
  }
}
