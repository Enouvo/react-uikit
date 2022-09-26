export const omitDeep = (obj: Record<string, unknown>, key: string) => {
  const keys = Object.keys(obj);
  const newObj: Record<string, unknown> = {};
  keys.forEach(i => {
    if (i !== key) {
      const val = obj[i];
      if (val instanceof Date) newObj[i] = val;
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      else if (Array.isArray(val)) newObj[i] = omitDeepArrayWalk(val, key);
      else if (typeof val === "object" && val !== null)
        newObj[i] = omitDeep(val as Record<string, unknown>, key);
      else newObj[i] = val;
    }
  });
  return newObj;
};

export const omitDeepArrayWalk = (arr: Array<unknown>, key: string) =>
  arr.map(val => {
    if (Array.isArray(val)) return () => omitDeepArrayWalk(val, key);
    if (typeof val === "object")
      return omitDeep(val as Record<string, unknown>, key);
    return val;
  });
