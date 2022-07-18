const toCamel = (s: string) => {
  const p2 = s.replace(/([-_][a-z])/gi, (p1: string) => {
    return p1.toUpperCase().replace('-', '').replace('_', '');
  });
  return p2.charAt(0).toUpperCase() + p2.slice(1);
};

export default toCamel;
