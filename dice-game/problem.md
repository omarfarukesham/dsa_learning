Step 1
In this project, you will learn algorithmic thinking by building a dice game. There are a total of 6 rounds and for each round, the player can roll the dice up to 3 times and collect a score.

The HTML and CSS have been provided for you. Feel free to explore them. When you are ready, you will need to set up your HTML variables. Get all of your .die elements and assign them to a listOfAllDice variable. Get your score inputs (the input elements in your #score-options) and score spans, and assign them to scoreInputs and scoreSpans. Assign the #current-round element to roundElement and the #current-round-rolls element to rollsElement, then do the same for your #total-score and #score-history elements. Assign your #roll-dice-btn, #keep-score-btn, #rules-btn, and .rules-container to variables with properly formatted names.

When the user clicks on the Show rules button, they should be able to toggle between showing and hiding the game rules. Create a variable isModalShowing to track the state of the game rules.

Each time the user rolls the dice, you will need to keep track of all of the dice values. Create a variable diceValuesArr to track this.

Throughout the game, you will need to keep track of the current score, total score, number of rolls and which round the player is on. Declare rolls, score, and round variables for this purpose.

Think about what the starting value of each of these variables should be. All of these variables should be able to be reassigned.