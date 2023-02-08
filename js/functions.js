const obj = {
  viktor: ["apple", "grape", "orange", "apple", "banana"],
  kate: ["grape", "orange", "apple", "grape", "banana"],
};
// console.log(obj);

function calc(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  //   console.log(keys);
  //   console.log(values);

  const result = keys.reduce((acc, name, index) => {
    acc[name] = {};
    values[index].forEach((fruit) => {
      return (acc[name][fruit] = !acc[name][fruit] ? 1 : acc[name][fruit] + 1);
    });
    // console.log(values[index]);

    return acc;
  }, {});

  return result;
}
console.log(calc(obj));
