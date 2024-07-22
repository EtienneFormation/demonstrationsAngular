import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UnptinomComponent} from "./unptinom/unptinom.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UnptinomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demonstrations';
}
