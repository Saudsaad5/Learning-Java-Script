function BeerBottles(){
    var bottles = 99;

    while (bottles > 0){
        console.log( bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down and pass it around, "+ (bottles - 1) + " bottles of beer on the wall.");
        bottles--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}

BeerBottles()
