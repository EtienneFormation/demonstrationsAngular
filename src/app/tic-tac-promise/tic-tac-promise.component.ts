import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tic-tac-promise',
  standalone: true,
  imports: [],
  templateUrl: './tic-tac-promise.component.html',
  styleUrl: './tic-tac-promise.component.css'
})
export class TicTacPromiseComponent implements OnInit {
  tictac = 'tic'

  ngOnInit() {
    this.tic()
      .then(() => this.tac())
      .then(() => this.tic())
      .then(() => this.tac())
      .then(() => this.tic())
      .then(() => this.tac())
      .then(() => this.tic())
      .then(() => this.tac())
      .then(() => this.tic())
      .then(() => this.tac())
      .then(() => this.tictac = 'BOOM');
  }

  tic() {
    this.tictac = 'tic';
    return new Promise((resolve) => {
      /*
       * Un traitement très très long
       */
      setTimeout(resolve, 1000);
    });
  }

  tac() {
    this.tictac = 'tac';
    return new Promise((resolve) => {
      /*
       * Un traitement très très long
       */
      setTimeout(resolve, 1000);
    });
  }
}
