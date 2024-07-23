import { Component } from '@angular/core';
import {CommonModule, DatePipe, NgForOf, TitleCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UtilisateurService} from "../utilisateur.service";

@Component({
  selector: 'app-liste-utilisateurs',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    TitleCasePipe,
    DatePipe,
    CommonModule
  ],
  templateUrl: './liste-utilisateurs.component.html',
  styleUrl: './liste-utilisateurs.component.css'
})
export class ListeUtilisateursComponent {

  constructor(private utilisateurService : UtilisateurService) {
  }

  get utilisateurs() {
    return this.utilisateurService.usernames;
  }

  deleteUtilisateur(utilisateur : string) {
    this.utilisateurService.deleteUser(utilisateur);
  }
}
