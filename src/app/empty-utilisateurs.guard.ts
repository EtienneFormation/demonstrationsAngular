import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UtilisateurService} from "./utilisateur.service";

export const emptyUtilisateursGuard: CanActivateFn = (route, state) => {
  let userService = inject(UtilisateurService);
  if (userService.usernames.length > 0) {
    return true;
  }

  let router = inject(Router);
  router.navigate(['/demo3']);
  return false;
};
