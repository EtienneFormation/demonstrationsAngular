import {Pokemon} from "./pokemon";

export interface PokemonWrapper {
  "count" : number,
  "next" : string,
  "previous" : string,
  "results" : Pokemon[]
}
