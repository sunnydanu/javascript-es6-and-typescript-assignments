class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

Rectangle.prototype.getArea = function () {
  return this.height * this.width;
};
const R1 = new Rectangle(4, 5);
console.log(R1);


console.log("Get Area", R1.getArea());
// Overide height
R1.height = 50;

console.log("Overide height with 50")
console.log("Get Area", R1.getArea());

