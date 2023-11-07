export default [
  {
    title: "Sort by Time",
    value: "updated_at",
    order: [
      {
        title: "Recently Updated",
        value: 1,
      },
      {
        title: "Least Recently Updated",
        value: -1,
      },
    ],
  },
  {
    title: "Sort by Name",
    value: "title",
    order: [
      {
        title: "A to Z",
        value: -1,
      },
      {
        title: "Z to A",
        value: 1,
      },
    ],
  },
  {
    title: "Sort by Price",
    value: "price",
    order: [
      {
        title: "Low to High",
        value: -1,
      },
      {
        title: "High to Low",
        value: 1,
      },
    ],
  },
];
