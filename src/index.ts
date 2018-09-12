function isInWhitelist<T>(whitelist: T[], needle: T) {
  return whitelist.indexOf(needle) !== -1;
}

export function shallowDiffers<T extends object, K extends Extract<keyof T, string> = never>(
  objectA: T,
  objectB: T,
  whitelist: K[] = []
) {
  for (const property in objectA) {
    if (!isInWhitelist(whitelist, property) && !(property in objectB)) {
      return true;
    }
  }
  for (const property in objectB) {
    if (!isInWhitelist(whitelist, property) && objectA[property] !== objectB[property]) {
      return true;
    }
  }
  return false;
}
