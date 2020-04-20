import { Injectable } from "@angular/core";
import { TestObservablesService } from "../test-observables.service";

@Injectable({
  providedIn: "root",
})
export class UpokeService {
  constructor(private service: TestObservablesService) {}
  update(pokemon: string) {
    this.deletePokemon();
    // this.service.updatePeople(pokemon);
  }

  deletePokemon() {
    const pokemons = [
      {
        name: "Test1",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      {
        name: "Test1",
        url: "https://pokeapi.co/api/v2/pokemon/6/",
      },
      {
        name: "Test2",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
      },
    ];
    this.service.removepokemon(pokemons);
  }

  getPokemonsFilter() {
    const pokemons = [
      {
        name: "Test1",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      {
        name: "Test2",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
      },
    ];

    const result = this.service.updatePokemon(pokemons);
    console.log("get pokmeon: ", result);
  }
}
