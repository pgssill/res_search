import { titleize } from './titleize';

export function formatList(array: string[], locale: string): string {
  const intlListFormat = new Intl.ListFormat(locale, { style: 'short' });
  return intlListFormat.format(array.map((str) => titleize(str)));
}
