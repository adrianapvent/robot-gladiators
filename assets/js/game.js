var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth)

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames);
// console.log(enemyNames.length);
// console.log(enemyNames [0]);
// console.log(enemyNames[3]);

//fight function (now with paramenter for enemy's name)
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
    while(enemyHealth > 0 && enemyHealth > 0) {
       // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player choses to fight, then fight
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + 'has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney" , playerMoney);
            break;
        }
        // if no (false), ask question again by running fight() again
        else fight;
    }
}
    // remove enemy's health by subtracting the amount set in the playerAttack variable enemyHealth = enemyHealth - playerAttack variable 
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        //check enemy's health
        if(enemyHealth <=0) {
            window.alert(enemyNames + "has died!");   
        // award player money for winning playerMoney = playerMoney + 20;
            playerMoney = playerMoney + 20
        //leave while() loop since enemy is dead 
        break;
        } else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while () loop if player is dead
            break;
            // while (playerHealth > 0 && enemyHealth > 0);
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
            }
            } // end of while loop
        }; // end of fight function
        
        //fight each enemy-robot by looping over them and fighting them one at a time
        for (var i = 0; i < enemyNames.length; i++) {
            // if player is still alive, keep fighting
            if (playerHealth > 0) {
                // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
                window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

                //pick new enemy to fight based on the index of the enemyNames array
                var pickedEnemyName = enemyNames [i];

                // reset enemyHealth before starting new fight
                enemyHealth = 50;

                //use debugger to pause script from running and check what's going on at that moment in the code
                //debugger;

                //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter fight(pickedEnemyName);
            }
            //if player isn't alive, stop the game
            else { 
                window.alert ('You have lost your robot in battle! Game Over!');
            }
        }




//             if (confirmSkip) {
//                 window.alert(playerName + " has decided to skip this fight. Goodbye!");
//                 //subtract money from playerMoney for skipping
//                 playerMoney = playerMoney - 2;
//             }
//             // if no (false), ask question again by running fight () again
//             else {
//                 fight();
//             }
            
//       for (var i = 0; i < enemyNames.length; i++) {
//         var pickedEnemyName = enemyNames[i]
//         enemyHealth = 5-;
//         fight(pickedEnemyName);
//             // window.alert(playerName + "has chosen to skip the fight!");
//         } else {
//             window.alert("You need to choose a valid option. Try again!");
//         }
//     };
//     //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
//     enemyHealth = enemyHealth - playerAttack;
//     //Log a resulting message to the console so we know that it worked.
//     console.log(
//         playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
//     );
//     //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
//     playerHealth = playerHealth - enemyAttack;
//     // put new code under this
//     console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
//     // check player's health
//     if (playerHealth <= 0) {
//     window.alert(playerName + " has died!");
//     break;
//     } 
//     else {
//     window.alert(playerName + " still has " + playerHealth + " health left.");
//     }
//     //Log a message to the console so we know that it worked.
//     enemyNames + " attacked " + playerName + ". " + playerName + "now has" + playerHealth + " health remaining."
//     // put new code under this
//     console.log(
//         playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining "
//     );
//     // check enemy's health
//     if (enemyHealth <= 0) {
//         window.alert(enemyNames + " has died!");
//     }
//     else {
//         window.alert(enemyNames + " still has " + enemyHealth + " health left.");
//     }




// // fight();