function add(num1,num2){
    return num1 + num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function calculater(num1,num2,operation){
    return operation(num1,num2);
}

calculater(1,1,add);
calculater(2,4,multiply);
