$(document).ready(function() {
    // Here we establish the 'randomTargerNumber' between 19 - 120.
    var randomTargerNumber = Math.floor(Math.random() * 102) + 19;
    // put targerNumber insie de span id = number-to-guess
    $('#number-to-guess').text(randomTargerNumber);

    // Here we created a counter, we'll be using this to track the user's total.
    var counter = 0;
    // Placeholder for wins
    var wins = 0;
    // Placeholder for losses
    var losses = 0;
    // Each crystal should have a random hidden value between 1 - 12.
    var randomNumberOptions = Math.floor(Math.random() * 12) + 1 ;


    // FUNCTION
    // EVENT click C1
    $('#c1').on('click', function() {
        // When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
        counter += randomNumberOptions;
        console.log(c1);
        $('#counter').text(counter);
            // Here we create some logic to 'check' if click counter matches with randomTargerNumber.
            if (counter === randomTargerNumber) {
                wins++;
                $('#wins').text(wins);
                reset();
                $('#win-losse').text('You win!!');
            } else if (counter > randomTargerNumber) {
                losses++;
                $('#losses').text(losses);
                reset();
                $('#win-losse').text('You lose!!');
            }
    });
        
    // EVENT click C2
    $('#c2').on('click', function() {
        // When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
        counter += randomNumberOptions;
        $('#counter').text(counter);
            // Here we create some logic to 'check' if click counter matches with randomTargerNumber.
            if (counter === randomTargerNumber) {
                wins++;
                $('#wins').text(wins);
                reset();
                $('#win-losse').text('You win!!');
            } else if (counter > randomTargerNumber) {
                losses++;
                $('#losses').text(losses);
                reset();
                $('#win-losse').text('You lose!!');
            }
    });      
    
    // EVENT click C3
    $('#c3').on('click', function() {
        // When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
        counter += randomNumberOptions;
        $('#counter').text(counter);
            // Here we create some logic to 'check' if click counter matches with randomTargerNumber.
            if (counter === randomTargerNumber) {
                wins++;
                $('#wins').text(wins);
                reset();
                $('#win-losse').text('You win!!');
            } else if (counter > randomTargerNumber) {
                losses++;
                $('#losses').text(losses);
                reset();
                $('#win-losse').text('You lose!!');
            }
    });        
    
    // EVENT click C4
    $('#c4').on('click', function() {
        // When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
        counter += randomNumberOptions;
        $('#counter').text(counter);
        // Here we create some logic to 'check' if click counter matches with randomTargerNumber.
        if (counter === randomTargerNumber) {
            wins++;
            $('#wins').text(wins);
            reset();
            $('#win-losse').text('You win!!');
        } else if (counter > randomTargerNumber) {
            losses++;
            $('#losses').text(losses);
            reset();
            $('#win-losse').text('You lose!!');
        }
    });

function reset(){
    counter = 0;
    $('#counter').text(counter);
    // randomTargerNumber = Math.floor(Math.random() * 50);
    var minTargerNumber = 30; // minimum
    var maxTargerNumber = 50; // maximum
    var randomTargerNumber = Math.floor(Math.random() * 102) + 19;
    $('#number-to-guess').text(randomTargerNumber);
    var randomNumberOptions = Math.floor(Math.random() * 12) + 1;
    
}
});