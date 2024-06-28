let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,  
};

/*
if(score === null)
{
score = {
  wins: 0,
  losses: 0,
  ties: 0,
};  
}
*/
let isAutoPlaying = false;

let intervalId;

function autoPlay()
{
 if(!isAutoPlaying)
 { 
intervalId = setInterval(() =>
 {
 const playerChoice = PickComputermove(); 
playgame(playerChoice);
 },1000); 
 isAutoPlaying = true;
}
else {
clearInterval(intervalId);
isAutoPlaying = false;
}
}

document.querySelector('.js-rock-button').addEventListener('click',() =>
{
playgame('rock');
})

document.querySelector('.js-paper-button').addEventListener('click',() =>
{
playgame('paper');
})

document.querySelector('.js-scissor-button').addEventListener('click',() =>
{
playgame('scissor');
})

document.body.addEventListener('keydown',(event) =>
{
  if(event.key === 'r' || event.key === 'R')
  {
    playgame('rock');
  }
  else if(event.key === 'p' || event.key === 'P')
  {
    playgame('paper');
  }
  else if(event.key === 's' || event.key === 'S')
  {
    playgame('scissor');
  }
})


function playgame(playerChoice)
{
const computerMove = PickComputermove();

let result = '';

if(playerChoice === 'scissor')
{
  if( computerMove === 'rock')
  {
  result = 'you lose';
  }
  else if(computerMove  === 'Paper')
  {
    result = 'you won';
  }
  else if(computerMove  === 'scissor')
  {
    result = 'tie';
  }
}

else if(playerChoice === 'paper')
{
   if(computerMove === 'rock')
    {
    result = 'you won';
    }
    else if(computerMove === 'Paper')
    {
      result = 'tie' ;
    }
    else if(computerMove === 'scissor')
    {
      result = 'you lose';
    }

}

else if(playerChoice === 'rock')
{
if(computerMove === 'rock')
  {
  result = 'tie';
  }
  else if(computerMove === 'Paper')
  {
    result = 'you lose';
  }
  else if(computerMove === 'scissor')
  {
    result = 'you won';
  }
}

if(result === 'you won')
{
score.wins += 1;
}
else if(result === 'you lose')
{
score.losses += 1;
}
else if(result === 'tie')
{
score.ties += 1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScore();

document.querySelector('.js-result').innerHTML = result;


document.querySelector('.js-moves').innerHTML =`you <img class="img-css" src="image/${playerChoice}.png"> <img class="img-css" src="image/${computerMove}.png">computer`;

}
function updateScore(){
document.querySelector('.js-score').innerHTML = `wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
};


function PickComputermove()
{
let computerMove = '';
const randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber <= 1/3)
    {
    computerMove = 'rock';
    }
    else if (randomNumber >=1/3 && randomNumber <=2/3)
    {
    computerMove= 'Paper';
    }
    else
    {
    computerMove = 'scissor';
    }
return computerMove; 
}