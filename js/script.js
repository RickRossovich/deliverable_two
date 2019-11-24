var vacationType = prompt("What type of vacation would you like to take: musical, tropical, or adventurous?");
var groupSize = prompt("How many people are traveling in your group?");




    if (vacationType === "musical") {
       var destination = " to New Orleans for a music-centric vacation.";
    } else if(vacationType === "tropical") {
        var destination = " to Mexico, for a beach vacation.";
    } else if (vacationType === "adventurous") {
        var destination = " to the Grand Canyon, for Whitewater Rafting.";
    }



    if(groupSize <= 2) { 
        var groupNumber = "fly first class";
     } else if(groupSize <= 5) { 
        var groupNumber = "take a helicopter";
     } else if (groupSize <= 6) {
        var groupNumber = "Charter a flight";
     }



var result = console.log("Since there are " + groupSize + " people traveling on a " + vacationType +" vacation, you should " + groupNumber + destination)
