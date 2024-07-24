import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  myform : FormGroup;

  constructor() {
    this.myform = new FormGroup({
      username : new FormControl('Mathis', Validators.required),
      age : new FormControl('', [Validators.required, Validators.min(18)]),
      ddn : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(9)]),
      topping1 : new FormControl('', []),
      topping2 : new FormControl('', []),
      topping3 : new FormControl('', []),
      base : new FormControl('', [Validators.required]),
      sport : new FormControl('', [Validators.required]),
      grade : new FormControl('', [Validators.required]),
      commentary : new FormControl('', [])
    });
  }

  onFormSubmit() {
    console.log(this.myform.value);
    console.log(this.myform.valid);
  }
}
