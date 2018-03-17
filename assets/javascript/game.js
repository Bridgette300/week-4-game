$(document).ready(function(){
    let gameGoal = Math.floor(Math.random() * 101 + 19);
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    $('#randomNumber').text(gameGoal);
    // Appending random number to the randomNumber id in the html doc
    //
    let crystal2 = Math.floor(Math.random() * 11 + 1);
    let crystal3 = Math.floor(Math.random() * 11 + 1);
    let crystal1 = Math.floor(Math.random() * 11 + 1);
    let crystal4 = Math.floor(Math.random() * 11 + 1);
    // Setting up random numbers for each jewel
    // gameGoal number has to be between 1 - 12
    // 
    let totalNum = 0; 
    let wins = 0;
    let losses = 0;
    //  Decaring letiables for tallies
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  //resets the game
  function reset(){
        gameGoal = Math.floor(Math.random() * 101 + 19);
        console.log(gameGoal);
        $('#randomNumber').text(gameGoal);
        crystal1 = Math.floor(Math.random() * 11 + 1);
        crystal2 = Math.floor(Math.random() * 11 + 1);
        crystal3 = Math.floor(Math.random() * 11 + 1);
        crystal4 = Math.floor(Math.random() * 11 + 1);
        totalNum = 0;
        $('#finalTotal').text(totalNum);
        } 

 
    //adds the wins to the totalNum
  function winner(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  //addes the losses to the totalNum
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

  //sets up click for jewels
    $('#one').on ('click', function(){
      totalNum = totalNum + crystal1;
      console.log("New totalNum= " + totalNum);
      $('#finalTotal').text(totalNum); 
            //sets win/lose conditions
          if (totalNum == gameGoal){
            winner();
          }
          else if ( totalNum > gameGoal){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      totalNum = totalNum + crystal2;
      console.log("New totalNum= " + totalNum);
      $('#finalTotal').text(totalNum); 
          if (totalNum == gameGoal){
            winner();
          }
          else if ( totalNum > gameGoal){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      totalNum = totalNum + crystal3;
      console.log("New totalNum= " + totalNum);
      $('#finalTotal').text(totalNum);
  //sets win/lose conditions
            if (totalNum == gameGoal){
            winner();
          }
          else if ( totalNum > gameGoal){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      totalNum = totalNum + crystal4;
      console.log("New totalNum= " + totalNum);
      $('#finalTotal').text(totalNum); 
        
            if (totalNum == gameGoal){
            winner();
          }
          else if ( totalNum > gameGoal){
            loser();
          }
    });   
  }); 