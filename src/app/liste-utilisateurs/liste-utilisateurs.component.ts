import { Component } from '@angular/core';
import {CommonModule, DatePipe, NgForOf, TitleCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

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
  usernames : string[] = [];
  newUser : string = "";

  addUser() {
    if (this.newUser) {
      this.usernames.push(this.newUser);
      this.newUser = "";
    }
  }

  deleteUser(user : string) {
    let index = this.usernames.indexOf(user);
    if (index > -1) {
      this.usernames.splice(index, 1);
    }
  }

  protected readonly Date = Date;
}
