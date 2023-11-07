export default (array = [], base = "", order = 1) => {
  return array.sort((b, a) => {
    return a[base] < b[base]
      ? 1 * parseInt(order)
      : a[base] > b[base]
      ? -1 * parseInt(order)
      : 0;
  });
};
