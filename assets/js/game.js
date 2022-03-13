var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert player that they are starting the round
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50;

        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);    
        }

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player choses to fight, then fight
    if(promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable enemyHealth = enemyHealth -playerAttack;
        console.log(
            playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining.");

        //check enemy's health
        if(enemyHealth <=0) {
            window.alert(enemyName + "has died!");
        }   else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm a player want to skip
            var confirmSKip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true). leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
            }
            // if no (false), ask question again by running fight () again
            else {
                fight();
            }
        


            window.alert(playerName + "has chosen to skip the fight!");
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    // put new code under this
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    // check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    }  
    else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    //Log a message to the console so we know that it worked.
    enemyName + " attacked " + playerName + ". " + playerName + "now has" + playerHealth + " health remaining."
    // put new code under this
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining "
    );
    // check enemy's health
    if (enemyhealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
};

fight();