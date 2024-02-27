//#https://www.30secondsofcode.org/js/s/count-grouped-elements/
//##c groupby reduce
all = [...document.querySelectorAll('*')].map(a => a.tagName)
ff = frequencies(all)
nff = Array.from(Object.entries(ff))
nff.sort(function (a, b) { return b[1] - a[1] })
function count(arr) {
  return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}

const frequencies = arr => arr.reduce((a, v) => { a[v] = (a[v] ?? 0) + 1; return a; }, {});
af(Object.entries(frequencies([...document.querySelectorAll('*')].map(a => a.tagName)))).sort((a, b) => b[1] - a[1]).forEach(a => log(a.join(' ')))
points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
all
mya = []
count = 1
for (a in all) {
  log(`${all[a]}`)
  mya.push(`[${all[a]}, ${count}]`)
}


ff = frequencies(all)
var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]

const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

console.info([...map.keys()])
console.info([...map.values()])
console.info([...map.entries()])

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
const arr = [2, 2, 5, 2, 2, 2, 4, 5, 5, 9];

function foo(array) {
  let a = [],
    b = [],
    arr = [...array], // clone array so we don't change the original when using .sort()
    prev;

  arr.sort();
  for (let element of arr) {
    if (element !== prev) {
      a.push(element);
      b.push(1);
    }
    else ++b[b.length - 1];
    prev = element;
  }

  return [a, b];
}

const result = foo(arr);
console.log('[' + result[0] + ']', '[' + result[1] + ']')
console.log(arr)

all.reduce((item, all) => {
  if (item in all) {
    all[item] = 1
  } else { all[item] = 1 }
  return all
}, [])
function sortObj(obj) {
  return Object.values(obj).sort().reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}
let list = {
  "name": "Ann",
  "age": 75
};
let arr = sortObj(list);
console.log(arr);
const sortObject = obj => Object.keys(obj).sort().reduce((res, key) => (res[key] = obj[key], res), {})
https://bobbyhadz.com/blog/javascript-convert-object-to-array-of-objects
