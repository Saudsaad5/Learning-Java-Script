function fibonacciGenerator(n) {
    var fibList = [];
    
    if (n === 1) {
        fibList = [0];
    } else if (n === 2) {
        fibList = [0, 1];
    } else {
        fibList = [0, 1];
        while (fibList.length < n) {
            fibList.push(fibList[fibList.length - 2] + fibList[fibList.length - 1]);
        }
    }
    
    return fibList;
}
