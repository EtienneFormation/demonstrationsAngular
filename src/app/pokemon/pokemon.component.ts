import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemons : Pokemon[] = [];

  constructor(private service: PokemonService) {}

  async ngOnInit() {
    let wrapper = await this.service.fetchPokemon();
    if (wrapper) {
      this.pokemons = wrapper.results;
    }
  }
}
