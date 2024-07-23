import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UnptinomComponent} from "./unptinom/unptinom.component";
import {AffichageConditionnelComponent} from "./affichage-conditionnel/affichage-conditionnel.component";
import {ListeUtilisateursComponent} from "./liste-utilisateurs/liste-utilisateurs.component";
import {AjouterUtilisateurComponent} from "./ajouter-utilisateur/ajouter-utilisateur.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UnptinomComponent, AffichageConditionnelComponent, ListeUtilisateursComponent, AjouterUtilisateurComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demonstrations';
}
