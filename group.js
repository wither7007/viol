//#https://www.30secondsofcode.org/js/s/count-grouped-elements/
//##c groupby reduce
all = [...document.querySelectorAll('*')].map(a => a.tagName)
const frequencies = arr =>
  arr.reduce((a, v) => {
    a[v] = (a[v] ?? 0) + 1;
    return a;
  }, {});
ff = frequencies(all)
fres = (a, b) =>
  items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});


all.reduce((item, all) => {
  if (item in all) {
    all[item] = 1
  } else { all[item] = 1 }
  return all
}, [])