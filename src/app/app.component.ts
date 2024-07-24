import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {UnptinomComponent} from "./unptinom/unptinom.component";
import {AffichageConditionnelComponent} from "./affichage-conditionnel/affichage-conditionnel.component";
import {ListeUtilisateursComponent} from "./liste-utilisateurs/liste-utilisateurs.component";
import {AjouterUtilisateurComponent} from "./ajouter-utilisateur/ajouter-utilisateur.component";
import {FormulaireComponent} from "./formulaire/formulaire.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UnptinomComponent, AffichageConditionnelComponent, ListeUtilisateursComponent, AjouterUtilisateurComponent, RouterLink, RouterLinkActive, FormulaireComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demonstrations';

  constructor(private router : Router) {}

  goto(path : string) {
    this.router.navigate([path]);
  }
}
