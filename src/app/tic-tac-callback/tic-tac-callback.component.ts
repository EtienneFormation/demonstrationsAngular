import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tic-tac-callback',
  standalone: true,
  imports: [],
  templateUrl: './tic-tac-callback.component.html',
  styleUrl: './tic-tac-callback.component.css'
})
export class TicTacCallbackComponent implements OnInit {
  tictac = 'tic';

  ngOnInit() {
    this.tic(() => {
      this.tac(() => {
        this.tic(() => {
          this.tac(() => {
            this.tic(() => {
              this.tac(() => {
                this.tictac = "BOOM";
              })
            })
          })
        })
      })
    })
  }

  tic(callback: () => void) {
    this.tictac = 'tic';
    setTimeout(callback, 1000);
  }

  tac(callback: () => void) {
    this.tictac = 'tac';
    setTimeout(callback, 1000);
  }
}
