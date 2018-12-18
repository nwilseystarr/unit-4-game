//Main javaScript goes here

//document ready function
$(document).ready(function() {

    var wins = 0;
        $("#wins").html("Wins: " + wins);
    
    var losses = 0;
        $("#losses").html("Losses: " + losses);
    
    var score = [];
        $("#score").html("Score: 0");
    
    var compPick = [];
    
    reset()
    
    //RESET FUNCTION==========================================
    
    function reset() {
       score = 0; 
       $("#score").html("Score: 0");
       
       compPick = 0;

       //compPick function with math.floor + 19 to get a number between 19 and 120
       compPick = Math.floor(Math.random() * (120-19))+ 19;
           console.log("Computer Pick: " + compPick);
           $("#comp-pick").html("Number to guess: " + compPick);
    
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
    
        }   
    //==========================================RESET FUNCTION
    
    
       //on click event calling the img tag
       $("img").on("click", function() {

           //new var totalScore = score parsentInt .this function
           score = score += parseInt($(this).attr("value"));
           $("#score").html("Score: " + score);

           //if else statement
           if (score == compPick) {
               alert("YOU WIN!");
               wins ++;
               $("#wins").html("Wins: " + wins);
               reset(); 
                 
           } else if (score > compPick) {
               alert("YOU LOSE!");
               losses ++;
               $("#losses").html("Losses: " + losses);
               reset();
            }
    
           });
    });