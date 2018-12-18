//Main javaScript goes here 

//document ready function 
$(document).ready(function() { 
 
var wins = 0;
console.log(wins);
    $("#wins").html("Wins: " + wins);

var losses = 0; 
console.log(losses);
$("#losses").html("Losses: " + losses);

var score = 0;
console.log(score);
    $("#score").html("Score: " + score);

var compPick = [];


reset()

//RESET FUNCTION==========================================
function reset() {
    
    compPick = 0;

    //compPick function again with the same code
    compPick = Math.floor(Math.random() * 120)+ 19;
        console.log("Computer Pick: " + compPick);

    // gem functions again with the same code
    //var = gem 1 random number function 1-12 +1 (so as to not get zero) use math.random floor to get score
    var gem1 = Math.floor(Math.random()*12)+1;
    console.log("Gem 1: " + gem1);
    $("#gem-1").attr("value", gem1);

    //var = gem 2 random number function 1-12 +1 (so as to not get zero) use math.random floor to get score 
    var gem2 = Math.floor(Math.random()*12)+1;
    console.log("Gem 2: " + gem2);
    $("#gem-2").attr("value", gem2);

    //var = gem 3 random number function 1-12 +1 (so as to not get zero) use math.random floor to get score
    var gem3 = Math.floor(Math.random()*12)+1;
    console.log("Gem 3: " + gem3);
    $("#gem-3").attr("value", gem3);

    //var = gem 4 random number function 1-12 +1 (so as to not get zero) use math.random floor to get score 
    var gem4 = Math.floor(Math.random()*12)+1;
    console.log("Gem 4: " + gem4);
    $("#gem-4").attr("value", gem4);

//RESET FUNCTION==========================================
    }

    //on click event calling the img tag
    $("img").on("click", function() {
        //new var totalScore = score parsentInt .this function
        score = score += parseInt($(this).attr("value")); 
            console.log("total score: " + score);
    
        //if else statement 
        // if the score is === to computer pick they win  
        if (score == compPick) {
            wins ++;
            console.log("Wins " + wins);
            reset();
        } 
        // else if the score is > the computer pick they lose
        else if (score > compPick) {
            losses ++;
            console.log("Losses "+ losses);
            reset();
        }
        
        });
});