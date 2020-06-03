import {Component, OnInit} from '@angular/core';
import {ZeroCross} from '../ZeroCross';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
})
export class BattleComponent implements OnInit {

  private currentParent: ZeroCross;
  public board: ZeroCross[][];

  public cells: ZeroCross[][] = [[], [], [], []];
  public turn = ZeroCross.X;
  public gameover = false;
  public winner = '';

  constructor() {
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.cells[i][j] = ZeroCross.EMPTY;
      }
    }
  }


  init() {
    this.cells = [[], [], [], []];
    this.turn = ZeroCross.X;
    this.gameover = false;
    this.winner = null;
  }

  clickHandler(row: number, col: number) {
    console.log(row);
    if (!this.gameover) {
      console.log('sth set');
      if (this.cells[row][col] === ZeroCross.EMPTY) {
        this.cells[row][col] = this.turn;
        this.checkWinner();
        this.changeTurn();
      }
    }
  }

  changeTurn() {
    if (this.turn === ZeroCross.X) {
      this.turn = ZeroCross.O;
    } else {
      this.turn = ZeroCross.X;
    }
  }

  checkWinner() {

    // Проверки диагоналей
    if (this.cells[0][0] === ZeroCross.X && this.cells[1][1] === ZeroCross.X && this.cells[2][2] === ZeroCross.X) {
      this.gameover = true;
    } else if (this.cells[0][0] === ZeroCross.O && this.cells[1][1] === ZeroCross.O && this.cells[2][2] === ZeroCross.O) {
      this.gameover = true;
    }
    if (this.cells[0][2] === ZeroCross.X && this.cells[1][1] === ZeroCross.X && this.cells[2][0] === ZeroCross.X) {
      this.gameover = true;
    } else if (this.cells[0][2] === ZeroCross.O && this.cells[1][1] === ZeroCross.O && this.cells[2][0] === ZeroCross.O) {
      this.gameover = true;
    }

    // Проверка вертикалей горизонталей
    for (let i = 0; i < 3; i++) {
      if (this.cells[i][0] === ZeroCross.X && this.cells[i][1] === ZeroCross.X && this.cells[i][2] === ZeroCross.X) {
        this.gameover = true;
      } else if (this.cells[i][0] === ZeroCross.O && this.cells[i][1] === ZeroCross.O && this.cells[i][2] === ZeroCross.O) {
        this.gameover = true;
      }
      if (this.cells[0][i] === ZeroCross.X && this.cells[1][i] === ZeroCross.X && this.cells[2][i] === ZeroCross.X) {
        this.gameover = true;
      } else if (this.cells[0][i] === ZeroCross.O && this.cells[1][i] === ZeroCross.O && this.cells[2][i] === ZeroCross.O) {
        this.gameover = true;
      }
    }

    if (this.gameover) {
      this.winner = 'me';
    }

  }


}


