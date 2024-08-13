function Car (name, model, year, color){
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
}

var car1 = new Car("BMW", "something", 2024, "Blue");

console.log(car1.name);
