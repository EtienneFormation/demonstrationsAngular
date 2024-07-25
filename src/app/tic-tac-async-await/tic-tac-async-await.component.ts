import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tic-tac-async-await',
  standalone: true,
  imports: [],
  templateUrl: './tic-tac-async-await.component.html',
  styleUrl: './tic-tac-async-await.component.css'
})
export class TicTacAsyncAwaitComponent implements OnInit {
  tictac = 'tic';

  async ngOnInit() {
    await this.tic();
    await this.tac();
    await this.tic();
    await this.tac();
    await this.tic();
    await this.tac();
    await this.tic();
    await this.tac();
    await this.tic();
    await this.tac();
    this.tictac = 'BOOM';
  }

  async tic() {
    this.tictac = 'tic';
    return new Promise((resolve) => {
      /*
       * Un traitement très très long
       */
      setTimeout(resolve, 1000);
    });
  }

  async tac() {
    this.tictac = 'tac';
    return new Promise((resolve) => {
      /*
       * Un traitement très très long
       */
      setTimeout(resolve, 1000);
    });
  }
}
