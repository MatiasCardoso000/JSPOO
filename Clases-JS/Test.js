class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(perimeter);
  }
}

class Square extends Shape {
  sideLength;
  constructor(name, sides, sideLength) {
    super(name, sides);
    this.sideLength = sideLength;
  }

  calcArea() {
    const perimeter = this.sides * this.sideLength;
    console.log(perimeter);
  }
}

// const square = new Shape("square", 4, 5);
const square1 = new Square("square", 4, 5);
square1.calcPerimeter();
square1.calcArea();
