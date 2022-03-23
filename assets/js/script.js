// TODO: Declare any global variables we need
let image = document.querySelector('img');
let headsCell = document.querySelector('#heads');
let headsPercent = document.querySelector('#heads-percent');
let tailsCell = document.querySelector('#tails');
let tailsPercent = document.querySelector('#tails-percent');
let message = document.querySelector('#message');
let heads = 0;
let tails = 0;
let totalRolls = 0;

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools

 // TODO: Add event listener and handler for flip and clear buttons

const flipBtn = document.querySelector('#flip');
flipBtn.addEventListener('click', function(){
    let flipOutcome = Math.random()

if (flipOutcome <=0.5){
    image.setAttribute('src', 'assets/images/penny-heads.jpg')
    heads++;
    message.textContent = "You Flipped Heads!"
} else {
    image.setAttribute('src', 'assets/images/penny-tails.jpg')
    tails++;
    message.textContent = "You Flipped Tails!"
}
        // Update the scorboard
         // TODO: Calculate the total number of rolls/flips
    totalRolls = heads + tails; 
        // Make variables to track the percentages of heads and tails
        let percentHeads = 0;
        let percentTails = 0;

        if (heads){
            percentHeads = Math.round((heads / totalRolls) * 100);
        } 

        if(tails){
            percentTails = Math.round((tails / totalRolls) * 100);
        }

        headsCell.textContent = heads;
        headsPercent.textContent = `${percentHeads}%`;
        tailsCell.textContent = tails;
        tailsPercent.textContent = `${percentTails}%`;
})

    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
    
const clearBtn = document.getElementById('clear');
        clearBtn.addEventListener('click', function(){
        heads = 0;
        tails = 0;
        totalRolls = 0;

        headsCell.textContent = heads;
        headsPercent.textContent = `0%`;
        tailsCell.textContent = tails;
        tailsPercent.textContent = `0%`;
        message.textContent = "Lets get Rolling!"
        })

})