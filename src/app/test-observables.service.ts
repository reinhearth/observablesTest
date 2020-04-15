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
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon").pipe(
      map((pokemons) => {
        console.log("getting into the pokemon", pokemons);
        return pokemons.results;
      })
    );
  }

  getPeople() {
    return this.subjectPeople;
  }

  updatePeople() {
    this.result.pokemons[0].name = "chingadamadre";
    this.subjectPeople.next(this.result.pokemons);
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
