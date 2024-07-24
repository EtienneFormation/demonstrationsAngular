import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {UnptinomComponent} from "./unptinom/unptinom.component";
import {AffichageConditionnelComponent} from "./affichage-conditionnel/affichage-conditionnel.component";
import {AjouterUtilisateurComponent} from "./ajouter-utilisateur/ajouter-utilisateur.component";
import {ListeUtilisateursComponent} from "./liste-utilisateurs/liste-utilisateurs.component";

export const routes: Routes = [
  { path : 'demo1', component : UnptinomComponent },
  { path : 'demo2', component : AffichageConditionnelComponent },
  { path : 'demo3', component : AjouterUtilisateurComponent },
  { path : 'demo4', component : ListeUtilisateursComponent }
];
