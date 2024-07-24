import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateurService} from "../utilisateur.service";

@Component({
  selector: 'app-consulter-utilisateur',
  standalone: true,
  imports: [],
  templateUrl: './consulter-utilisateur.component.html',
  styleUrl: './consulter-utilisateur.component.css'
})
export class ConsulterUtilisateurComponent implements OnInit {

  user = "";

  constructor(private route : ActivatedRoute,
              private service : UtilisateurService) {}

  ngOnInit() {
    // Ne fonctionne que au premier accès au composant
    // let idStr = this.route.snapshot.paramMap.get('id');

    // Actualisation dynamique de l'id aux accès suivants à ce composant
    this.route.paramMap.subscribe(params => {
      let idStr = params.get("id");
      if (idStr) {
        let id = parseInt(idStr);
        this.user = this.service.usernames[id];
      }
    });
  }
}
