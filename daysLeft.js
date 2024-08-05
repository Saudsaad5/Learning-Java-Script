var age = prompt("How old are you ? ");

function lifeInWeeks(age){
    
    var weeksLeft = (90 * 52) - (age * 52);
    var daysLeft = (90 * 365) - (age * 365);
    var monthsLeft = (90 * 12) - (age * 12);

    console.log("You have " + daysLeft + " days, "+ weeksLeft+" weeks, "+monthsLeft+ " months left.")
}

lifeInWeeks(56);
