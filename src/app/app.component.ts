import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'raad-het-getal';
  gameOn: boolean = false;
  randomNumber: number;
  guessesLeft: number;
  lastGuess: number;
  message: string;

  startGame(){
    this.gameOn = true;
    this.guessesLeft = 10;
    this.randomNumber = Math.floor(Math.random()*100);
    this.message = `We hebben een getal gekozen, je hebt 10 kansen om het te raden. Succes!`;
  }

  guess(newGuess){
    this.lastGuess = newGuess;
    this.guessesLeft--;
    if(this.randomNumber == this.lastGuess){
      this.message = `Proficiat, je hebt gewonnen,  ${this.lastGuess} is het juiste getal!`;
      this.endGame();
    }
    else if(this.guessesLeft == 0){
      this.message = `Je laatste gok was ${this.lastGuess}, je beurten zijn op, we zochten ${this.randomNumber}.`;
      this.endGame();
    }
    else if(this.randomNumber > this.lastGuess) {
      this.message = `Je laatste gok was ${this.lastGuess}, het getal dat we zoeken is groter.`;
    }
    else {
      this.message = `Je laatste gok was ${this.lastGuess}, het getal dat we zoeken is kleiner.`;
    }  
  }

  endGame(){
    this.gameOn = false;
  }
}
