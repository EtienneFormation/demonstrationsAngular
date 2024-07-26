import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "./pokemon";
import {PokemonWrapper} from "./pokemon-wrapper";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private client : HttpClient) { }

  async fetchPokemon() {
    return this.client.get<PokemonWrapper>('https://pokeapi.co/api/v2/pokemon/').toPromise();
  }
}
