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
    let newLastCats = [];
    return newLastCats = [...cats, name];
}

function prependCat(name) {
    let newFirstCats = [];
    return newFirstCats = [name, ...cats];
}

function removeLastCat() {
    let newLastCats = [];
    return cats.slice(0, cats.length -1);
}

function removeFirstCat() {
    let newFirstCats = [];
    return cats.slice(1);
}


