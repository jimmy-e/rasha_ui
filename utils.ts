export const toNumber = (str: string): number | undefined => {
  const value = str.replace(/,/gi, '').replace('$', '');
  return value ? Number(value) : undefined;
};
