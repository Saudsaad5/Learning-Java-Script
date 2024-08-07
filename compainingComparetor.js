function bmiCalculator (weight, height) {
    var result = weight/ (height * height);
    var interpretation = "";
    if (result < 18.5){
        interpretation = "Your BMI is " + result + ", so you are underweight.";
    }else if (result >= 18.5 && result <= 24.9){
        interpretation = "Your BMI is " + result + ", so you have a normal weight.";
    }else{
        interpretation = "Your BMI is " + result + ", so you are overweight.";
    }

    return interpretation;
}

var bmi = bmiCalculator (65,1.8);
console.log(bmi);
