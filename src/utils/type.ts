export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint;

export type DeepPartial<T> = T extends Primitive
  ? T
  : { [P in keyof T]?: DeepPartial<T[P]> };

export type Dictionary<T> = Record<string, T>;
