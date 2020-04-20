import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import {
  Observable,
  AsyncSubject,
  of,
  throwError,
  Subject,
  ReplaySubject,
} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TestObservablesService {
  constructor(private http: HttpClient) {}
  public result = {
    pokemons: [],
  };
  public subjectPeople = new ReplaySubject<any[]>();

  fetchOwnAccountsService() {
    return this.http.get<any>(" https://pokeapi.co/api/v2/pokemon").pipe(
      map((pokemons) => {
        console.log("getting into the pokemon", pokemons);
        return pokemons.results;
      }),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getPeople() {
    return this.subjectPeople;
  }

  updatePeople(parametro: string) {
    // const accounts = {
    //   type: "all",
    //   accounts: [],
    // };

    // const accounts = {
    //   type: "create",
    //   accounts: [],
    // };

    // const accounts = {
    //   type: "update",
    //   accounts: [],
    // };

    // const accounts = {
    //   type: "remove",
    //   accounts: [],
    // };

    this.result.pokemons[0].name = parametro;
    // this.result.pokemons.push(account);
    this.subjectPeople.next(this.result.pokemons);
  }

  // crudPokemon(type, pokemon) {
  //   switch (type) {
  //     case "create":
  //       this.createPokemon(pokemon);
  //       break;
  //     case "update":
  //       this.createPokemon(pokemon);
  //       break;
  //     case "remove":
  //       this.createPokemon(pokemon);
  //       break;
  //   }
  // }

  createPokemon(pokemon) {
    this.result.pokemons.push(pokemon);
    this.subjectPeople.next(this.result.pokemons);
  }

  updatePokemon(pokemonsArray) {
    this.result.pokemons = this.result.pokemons.map((pokemons) => {
      const updatePokmeons = pokemonsArray.filter(
        (element) => element.url === pokemons.url
      );

      return updatePokmeons.length === 0 ? pokemons : updatePokmeons[0];
    });
    this.subjectPeople.next(this.result.pokemons);
  }

  // removePokemon(pokemonsArray) {
  //   const backupPokemons = [...this.result.pokemons];
  //   for (let index in backupPokemons, ) {
  //     const element = array[element];

  //   }
  //   backupPokemons.forEach((element, index) => {
  //     const indexPokemon = pokemonsArray.findIndex(
  //       (pokmeon) => pokmeon.url === element.url
  //     );

  //     console.log("index Pokemon", indexPokemon);
  //     if (this.result.pokemons[indexPokemon]) {
  //       this.result.pokemons.splice(index, 1);
  //       pokemonsArray.splice(indexPokemon, 1);
  //       this.removePokemon(pokemonsArray);
  //     }
  //   });
  //   this.subjectPeople.next(this.result.pokemons);
  //   console.log("deleted pokemons: ", this.result.pokemons);
  // }

  removepokemon(array) {
    const arratemp = [...array];
    const result = this.result.pokemons.filter(
      (x) => x.url !== arratemp[0].url
    );
    arratemp.shift();
    this.result.pokemons = result;
    if (arratemp.length > 0) {
      this.removepokemon(arratemp);
    } else {
      console.log("result pokmeons: ", result);
      this.subjectPeople.next(this.result.pokemons);
    }
  }

  setPeople() {
    if (this.result.pokemons.length === 0) {
      this.fetchOwnAccountsService().subscribe((res) => {
        console.log("se hizo peticion");

        this.result.pokemons = res;
        this.subjectPeople.next(this.result.pokemons);
      });
    } else {
      console.log("sin hacer peticion");

      this.subjectPeople.next(this.result.pokemons);
    }
  }
}
