const items = [1, "iterator", true, 999.999];

function Iterator(items) {
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  },
};

const iterator = new Iterator(items);
while (iterator.hasNext()) {
  console.log(iterator.next());
}
