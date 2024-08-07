function FrontMiddleBack() {
  this.queue = [];
}

FrontMiddleBack.prototype.pushFron = function (val) {
  this.queue.unshift(val);
};

FrontMiddleBack.prototype.pushMiddle = function (val) {
  const middle = Math.floor(this.queue.length / 2);
  this.queue.splice(middle, 0, val);
};

FrontMiddleBack.prototype.pushLast = function (val) {
  this.queue.push(val);
};

FrontMiddleBack.prototype.popFront = function () {
  if (this.queue.length == 0) return -1;
  return this.queue.shift();
};

FrontMiddleBack.prototype.popMiddle = function () {
  if (this.queue.length == 0) return -1;
  return this.queue.splice(Math.floor(this.queue.length / 2), 1);
};

FrontMiddleBack.prototype.popLast = function () {
  if (this.queue.length == 0) return -1;
  return this.queue.pop();
};
