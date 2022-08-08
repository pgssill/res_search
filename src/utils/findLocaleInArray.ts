type ObjectWithLocaleKey<T extends Record<string, unknown>> = {
  locale: string;
} & T;

export function findLocaleInArray<T extends Record<string, unknown>>(
  array: Array<ObjectWithLocaleKey<T>>,
  locale: string
): T | undefined {
  return array.find((el) => el.locale === locale) || array[0];
}
