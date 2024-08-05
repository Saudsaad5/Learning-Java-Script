function bmiCalculator (weight,height){
    var result = weight/ (height * height);
    return result;
}

var bmi = bmiCalculator (65, 1.8);
console.log(bmi);
