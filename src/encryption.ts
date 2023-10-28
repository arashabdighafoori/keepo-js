import crypto from "crypto";

interface EncryptionContext {
  iv: string;
  encryptedData: string;
}

export class Encryption {
  public algorithm = "aes-256-cbc";
  iv: Buffer;

  constructor(public key = crypto.randomBytes(32)) {
    this.iv = crypto.randomBytes(16);
  }

  public decrypt(context: EncryptionContext) {
    const iv = Buffer.from(context.iv, "hex");
    const encryptedText = Buffer.from(context.encryptedData, "hex");
    const decipher = crypto.createDecipheriv(
      this.algorithm,
      Buffer.from(this.key),
      iv
    );
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }
}
