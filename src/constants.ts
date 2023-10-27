import { tmpdir } from "os";

export default class {
  public static nokeeperror = `no .keep file was found found.`;
  public static tmpdir = (() => {
    return tmpdir();
  })();

  public static root =
    process.env.APPDATA ||
    (process.platform == "darwin"
      ? process.env.HOME + "/Library/Preferences"
      : process.env.HOME + "/.local/share");

  public static globaldir = this.root + "/.keepo/";

  public static default_configuration = {
    opener: "code",
  };
}
