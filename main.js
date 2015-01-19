var score = [0]

var myScore

var accept = window.confirm("Welcome to Friday Night NBA tipoff. I'm your host Craig Saiger along with my colleagues Hannah Storm and Jalen Rose, and we will be taking you through what is shaping up to be an exciting night of NBA action. Are you ready?");

if (accept) {
  console.log ("Alright let's go straight to the action");
}

else
{
  console.log("You're probably a soccer fan anyway");
}

var playerLevel = prompt("First things first. Are you playing pro or college ball?");
  // -------PRO LEVEL-------
  if (playerLevel === "pro") {
    console.log("Right on superstar");
    var team = prompt("What team do you play for? The Philadelphia 76ers, New Orleans Pelicans, Washington Wizards or Charlotte Hornets");

    if (team === "Philadelphia 76ers") {
      console.log("Looks like you are going to really have to shoot the ball well tonight to win");
    }

    else if (team === "New Orleans Pelicans") {
      console.log("Go grab those putbacks");
    }

    else if (team === "Washington Wizards") {
      console.log("Driving in the lane is your strength");
    }
  }

  else if (playerLevel === "college") {
    console.log("That's cool, college is better than the pros anyway");
  }

  else {
    console.log("Thats not a league. You need to go watch some more Sports Center and come back later");
  }

  // -------SCORING-------
  var scoring = function (x) {

    for (i=0;i<=6;i++) {
      var shot = prompt("Alright you've got the ball, are you going to shoot a 3-ball or drive in the lane? (3-ball/drive)");
      var shotSuccess = Math.floor((Math.random() * 100) + 1);
      var reboundSuccess = Math.floor((Math.random() * 100) + 1);

      switch (shot) {
        case "3-ball":
          if (shotSuccess < 20) {
            score.push(3);
            console.log("You hit that shot from another area code for three");
          }

          else if (reboundSuccess < 10) {
            score.push(2);
            console.log("You missed horribly, but one of your teamates was there for the putback for two")
          }

          else {
            score.push(0);
            console.log("That's just not your range tonight. Your shot rimmed out");
          }
          break;
          case "drive":
            if (shotSuccess < 35) {
              score.push(2);
              console.log("Nice cut through the lane for the quick bucket, snaggin two points on the way through");
            }

            else if (reboundSuccess < 10) {
              score.push(2);
              console.log("Your shot got absolutely swatted, but it was scooped up and put back for two")
            }

            else {
              score.push(0);
              console.log("You just got pounded in the paint and blocked");
            }
          }

          var myScore = score.reduce(function(a, b) {
            return a + b;
          });

          console.log("You have ", myScore, "right now");
        }
      }

  // -------TIPOFF-------
    var tipoff = Math.floor((Math.random() * 100) + 1);

    if (tipoff > 50) {
      console.log("looks like you got the tipoff and one extra posession");
      scoring(7);
    }

    else {
      console.log("Your opponent has better hops than you and snagged the tipoff");
      scoring(6);
    }

//-------GAME END-------
  if (myScore > 10) {
    console.log("You won, nice work")
  }

  else {
    console.log("It just wasn't your game, there's always next game.")
  }

  // -------COLLEGE LEVEL-------
