import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'raad-het-getal';
  gameOn: boolean = false;
//  randomNumber: number = Math.floor(Math.random()*100);
  guessesLeft: number;
//  lastGuess: number;
//  message: string;

  startGame(){
    this.gameOn = true;
    this.guessesLeft = 10;
  }

//  guess(newGuess){
    //this.lastGuess = newGuess;
  guess(){  
    this.guessesLeft--;
  }

  endGame(){
    this.gameOn = false;
  //  this.guessesLeft = 0;
  }
}
