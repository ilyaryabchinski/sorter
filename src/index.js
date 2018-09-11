class Sorter {


  constructor() {
    this._items = [];
    this._compareFunction = (left, right) => left - right;
  }

  add(element) {
    this._items.push(element);
  }

  at(index) {
    return this._items[index];
  }

  get length() {
    return this._items.length;
  }

  toArray() {
    return this._items;
  }

  sort(indices) {
    const arrayToSort =  this._items.filter((value, index, array) => {
      return indices.includes(index);
    });
      arrayToSort.sort(this._compareFunction);
      indices.sort();
      let i = 0;
      indices.forEach(element => {
          this._items[element] = arrayToSort[i];
          i += 1;
      });
  }

  setComparator(compareFunction) {
    this._compareFunction = compareFunction;
  }
}

module.exports = Sorter;