//dependencies(dom elements,3rd party libraries):


//data//state(global variable):


//functions-help you to break up application into smaller chunks.
//function getUserChoice(){
 //ask the user for their choices R,P,or S
    //prompts 
    //return R
//}
//user interactions-user stories here
//initialization

//start game :function
//function startGame(){
   // console.log('im starting a game');
   
    //user select a choice.create an array with the 3 choices.

//generate randon choices for acomputer uisng a function
    // get user choice(r,p or s):prompt 
    //create an array with R,P or S
    //show the random computer choice
    //function getRandomElement(array) {
   // const randomIndex = Math.floor(Math.random() * array.length);
    //const randomElement = array[randomIndex];
    //return randomElement;
//}
//const array = [1, 2, 3, 4, 5];
//const randomElement = getRandomElement(array);
//console.log("Random element selected:", randomElement);
//console.log("Original array:", array); 

    //compare 2 choices
    //show the result like win or lose or tie
    // offer the user a chnce to keep playing
    //if user continues to play gmaes goes on
    //if user  end the game ,it shows the stats.

//pseudo code

//startGame();



function getUserChoice(){
    const choice =prompt("choose r ,p or s").toLowerCase();

    //ask user to slect r p or s
    //make sure they pit in one of those choices
    return choice;
}

const possibleChoices = ['r','p','s'];



function getComputerChoice() {
    const randomIndex =Math.floor(Math.random()*possibleChoices.length);
    const randomElement =possibleChoices[randomIndex];
    console.log(randomElement);
    return randomElement;
}




function startGame(){
    const userChoice = getUserChoice() ;
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);

    if (
        (userChoice === "r" && computerChoice === "s") ||
        (userChoice === "p" && computerChoice === "r") ||
        (userChoice === "s" && computerChoice === "p")
    )
     {
        
        console.log("you win");
        alert('you lost');
        return "win";
        
    } else if  (userChoice === computerChoice){
        alert ('tied');
        console.log("tie");
        return "tie";
        
    }else if
    
        (!randomElement.includes(userChoice)){
            alert('wrong choice');
           } else {
    alert('you lost');
    console.log("you lost")
        return "lost";
};
};
startGame();










//console.log(userChoice);

//GET USER CHOICE
//GET COMPUTER CHOICE
//CHECK WHO WON BY COMPARING THE CHOICES
//DISPLAY AMESSAGE
//DO YOU WNAT TO PLAY THE GAME?
//IF YES PLAY THE GAME AGAIN
