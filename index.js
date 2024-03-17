const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const newCatsArray = [...cats, name];
  return newCatsArray;
}

function prependCat(name) {
  const newCatsArray = [name, ...cats];
  return newCatsArray;
}

function removeLastCat() {
  const newCatsArray = cats.slice(0, -1);
  return newCatsArray;
}

function removeFirstCat() {
  const newCatsArray = cats.slice(1);
  return newCatsArray;
}

// Example usage:
console.log(cats);

destructivelyAppendCat("Ralph");
console.log(cats);

destructivelyPrependCat("Bob");
console.log(cats);

destructivelyRemoveLastCat();
console.log(cats);

destructivelyRemoveFirstCat();
console.log(cats);

const appendedCats = appendCat("Broom");
console.log(appendedCats); 
console.log(cats);

const prependedCats = prependCat("Arnold");
console.log(prependedCats);
console.log(cats);

const removedLastCat = removeLastCat();
console.log(removedLastCat);
console.log(cats);
const removedFirstCat = removeFirstCat();
console.log(removedFirstCat);
console.log(cats);
