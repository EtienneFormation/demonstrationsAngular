import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UtilisateurService} from "../utilisateur.service";

@Component({
  selector: 'app-ajouter-utilisateur',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrl: './ajouter-utilisateur.component.css'
})
export class AjouterUtilisateurComponent {
  newUser = "";

  constructor(private utilisateurService : UtilisateurService) {}

  addUser() {
    this.utilisateurService.addUser(this.newUser);
    this.newUser = "";
  }
}
