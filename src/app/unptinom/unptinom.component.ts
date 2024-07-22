import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-unptinom',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './unptinom.component.html',
  styleUrl: './unptinom.component.css'
})
export class UnptinomComponent {
  username = "";

  clearUsername() {
    this.username = "";
  }
}
