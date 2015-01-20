var score = [0];

//-------PRO SCORING FUNCTION-------
var proScoring = function(x) {

  for (i=0;i<=x;i++) {
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

      // -------SCORING DISPLAY-------
        var myScore = score.reduce(function(a, b) {
          return a + b;
        });

      console.log("You have ", myScore, "right now");
    }

    // -------FINAL SCORE DISPLAY-------
    if (myScore >= 10) {
      console.log("You won, looks like you got another W towards the hall of fame")
    }

    else {
      console.log("It just wasn't your night tonight, play better next game")
    }
  }
    //-------COLLEGE SCORING FUNCTION-------
    var collegeScoring = function(x) {

      for (i=0;i<=x;i++) {

        var shot = prompt("Alright you've got the ball, are you going to shoot a 3-ball or drive in the lane? (3-ball/drive)");
        var shotSuccess = Math.floor((Math.random() * 100) + 1);
        var reboundSuccess = Math.floor((Math.random() * 100) + 1);

        switch (shot) {
          case "3-ball":
            if (shotSuccess < 40) {
              score.push(3);
              console.log("You hit that shot from another area code for three");
            }

            else if (reboundSuccess < 25) {
              score.push(2);
              console.log("You missed horribly, but one of your teamates was there for the putback for two")
            }

            else {
              score.push(0);
              console.log("That's just not your range tonight. Your shot rimmed out");
            }
            break;
          case "drive":
            if (shotSuccess < 50) {
              score.push(2);
              console.log("Nice cut through the lane for the quick bucket, snaggin two points on the way through");
            }

            else if (reboundSuccess < 25) {
              score.push(2);
              console.log("Your shot got absolutely swatted, but it was scooped up and put back for two")
            }

            else {
              score.push(0);
              console.log("You just got pounded in the paint and blocked");
            }
          }

        // -------SCORING DISPLAY-------
        var myScore = score.reduce(function(a, b) {
          return a + b;
        });

        console.log("You have ", myScore, "right now");
        }

      // -------FINAL SCORE DISPLAY-------
      if (myScore >= 10) {
      console.log("You won, it might be time ot move up to the pros")
      }

      else {
      console.log("It just wasn't your game, play better next game")
      }
    }

// -------GAME START-------
var accept = window.confirm("Welcome to Friday Night NBA tipoff. I'm your host Craig Saiger along with my colleagues Hannah Storm and Jalen Rose, and we will be taking you through what is shaping up to be an exciting night of NBA action. Are you ready?");

if (accept) {
  console.log ("Alright let's go straight to the action");
}

else
{
  console.log("You're probably a soccer fan anyway");
}

// -------CHOOSE PLAYER LEVEL-------
var playerLevel = prompt("First things first. Are you playing pro or college ball?");

  // -------PRO LEVEL-------
  if (playerLevel === "pro") {
    console.log("Right on superstar");

    var proTeam = prompt("What team do you play for? The 76ers, Pelicans, or Wizards");

    if (proTeam === "76ers") {
      console.log("Let's go to Philadelphia, PA for tonights action");
    }

    else if (proTeam === "Pelicans") {
      console.log("Let's go to New Orleans, LA for tonights action");
    }

    else if (proTeam === "Wizards") {
      console.log("Let's go to Washington, DC for tonights action");
    }


    // -------GAMEPLAY PRO-------
    var tipoff = Math.floor((Math.random() * 100) + 1);

    if (tipoff > 50) {
      console.log("looks like you got the tipoff and one extra posession");
      proScoring(7);
    }

    else {
      console.log("Your opponent has better hops than you and snagged the tipoff");
      proScoring(6);
    }
  }

  // -------COLLEGE LEVEL-------
  else if (playerLevel === "college") {
    console.log("That's cool, college is better than the pros anyway");

    var collegeTeam = prompt("What team do you play for? Villanova, Kentucky, or UCLA");

    if (collegeTeam === "Villanova") {
      console.log("Let's go to Philadelphia, PA for tonights action");
    }

    else if (collegeTeam === "Kentucky") {
      console.log("Let's go to Lexington, KY for tonights action");
    }

    else if (collegeTeam === "UCLA") {
      console.log("Let's go to Los Angeles, CA for tonights action");
    }

    // -------GAMEPLAY COLLEGE-------
    var tipoff = Math.floor((Math.random() * 100) + 1);

    if (tipoff > 50) {
      console.log("looks like you got the tipoff and one extra posession");
      collegeScoring(7);
    }

    else {
      console.log("Your opponent has better hops than you and snagged the tipoff");
      collegeScoring(6);
    }
  }

  else {
    console.log("Thats not a league. You need to go watch some more Sports Center and come back later");
  }
