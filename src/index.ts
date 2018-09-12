function isInWhitelist(whitelist: string[], needle: string) {
  return whitelist.indexOf(needle) !== -1;
}

export function shallowDiffers(
  objectA: Record<string, any>,
  objectB: Record<string, any>,
  whitelist: string[] = []
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
