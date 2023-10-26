export function get(key: string) {
  return new Promise<string>((resolve, reject) => {
    reject(`${key} was not found.`);
  });
}

export function getSync() {
  return undefined;
}
