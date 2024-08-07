function whosPaying(names) {
    

    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var n = Math.random();
    n = n * names.length;
    n = Math.floor(n);
    
    var result = names[n] + " is going to buy lunch today!";
    
    return result;

}

whosPaying();
