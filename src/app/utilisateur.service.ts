import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  usernames : string[] = [];

  constructor() { }

  addUser(user : string) {
    if (user) {
      this.usernames.push(user);
    }
  }

  deleteUser(user : string) {
    let index = this.usernames.indexOf(user);
    if (index > -1) {
      this.usernames.splice(index, 1);
    }
  }
}
