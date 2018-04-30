$(document).ready(function() {
    // Here we establish the 'randomTargerNumber' between 19 - 120.
    var randomTargerNumber = Math.round(Math.random() * 120) + 1;
    // alert(randomTargerNumber);
    
    // put targerNumber insie de span id = number-to-guess
    $('#number-to-guess').text(randomTargerNumber);

    // Here we created a counter, we'll be using this to track the user's total.
    var counter = 0;
    // Placeholder for wins
    var wins = 0;
    // Placeholder for losses
    var losses = 0;
    

    // Each crystal should have a random hidden value between 1 - 12.
    var c1 = Math.round(Math.random() * 12) + 1;
    var c2 = Math.round(Math.random() * 11) + 1;
    var c3 = Math.round(Math.random() * 10) + 1;
    var c4 = Math.round(Math.random() * 9) + 1;
    var randomNumberOptions = [c1, c2, c3, c4];
    console.log(c1);



    // FUNCTION
    // EVENT click C1
    $('#c1').on('click', function() {
        // When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
        counter += randomNumberOptions[0];
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
        counter += randomNumberOptions[1];
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
        counter += randomNumberOptions[2];
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
        counter += randomNumberOptions[3];
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
    var randomTargerNumber = Math.floor(Math.random() * (maxTargerNumber + 1 ) + minTargerNumber);
    $('#number-to-guess').text(randomTargerNumber);
    c1 = Math.round(Math.random() * 8) + 1;
    c2 = Math.round(Math.random() * 7) + 1;
    c3 = Math.round(Math.random() * 6) + 1;
    c4 = Math.round(Math.random() * 5) + 1;
    
}


});