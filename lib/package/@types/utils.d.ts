/**
 * Make a type assembled from several types/utilities more readable.
 * (e.g. the type will be shown as the final resulting type instead of as a bunch of type utils wrapping the initial type).
 */
type FinalType<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

/**
 * Merge keys of O into T, overriding value types with those in O.
 */
type Override<T, O extends Partial<Record<keyof T, unknown>>> = FinalType<
  Omit<T, keyof O> & O
>;
