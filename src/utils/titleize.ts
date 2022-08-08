export const titleize = (str: string, separator?: string | RegExp): string => {
  if (!str) {
    return '';
  }
  const sep =
    separator && separator.constructor !== Number ? separator : /[\s_-]+/g;
  return str
    .toLocaleLowerCase()
    .split(sep)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
