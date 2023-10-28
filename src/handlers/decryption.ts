import { Encryption } from "../encryption";
import get_key from "./key";

export interface DecryptionRequest {
  encrypted: string;
  folder: string;
}

export function decrypt({ encrypted, folder }: DecryptionRequest) {
  return new Promise<string>((resolve, reject) => {
    const iv = encrypted.split(".")[0];
    encrypted = encrypted.split(".")[1];
    if (iv === "none") return encrypted;
    get_key(folder)
      .then((key) => {
        // encrypt content
        if (key === "") resolve(encrypted);
        const enc = new Encryption(Buffer.from(key));
        const decrypted = enc.decrypt({ iv, encryptedData: encrypted });
        resolve(decrypted);
      })
      .catch(reject);
  });
}
