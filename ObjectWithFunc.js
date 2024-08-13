function Car (name, model, year, color, move){
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.move = function(){
        return(this.name + " is moving!")
    }
}

var car1 = new Car("BMW", "something", 2024, "Blue");

console.log(car1.name);
console.log(car1.move());
