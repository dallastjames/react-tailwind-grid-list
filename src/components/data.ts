var faker = require("faker");

export const looper = new Array(500).fill(null).map((_, idx) => {
  console.log("BUILDING LOOPER DATA");
  return {
    key: idx,
    name: "Hello World!",
    image: faker.image.avatar(),
  };
});
