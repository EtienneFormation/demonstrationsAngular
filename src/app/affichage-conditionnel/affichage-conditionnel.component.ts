import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-affichage-conditionnel',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgStyle
  ],
  templateUrl: './affichage-conditionnel.component.html',
  styleUrl: './affichage-conditionnel.component.css'
})
export class AffichageConditionnelComponent {
  showWelcomeMessage = false;
  username = "";
}
