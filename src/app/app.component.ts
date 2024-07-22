import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UnptinomComponent} from "./unptinom/unptinom.component";
import {AffichageConditionnelComponent} from "./affichage-conditionnel/affichage-conditionnel.component";
import {ListeUtilisateursComponent} from "./liste-utilisateurs/liste-utilisateurs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UnptinomComponent, AffichageConditionnelComponent, ListeUtilisateursComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demonstrations';
}
