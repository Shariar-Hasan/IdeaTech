export default (
  array = [],
  selectedItem = "",
  indexText = "",
  allItemValue = ""
) => {
  return array.filter(
    (item) => item[indexText] === selectedItem || selectedItem === allItemValue
  );
};
