import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {
  Observable,
  AsyncSubject,
  of,
  throwError,
  Subject,
  ReplaySubject,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestObservablesService2 {
  constructor(private http: HttpClient) {}
  public result = {
    character: [],
  };
  public subjectPeople = new ReplaySubject<any[]>();

  fetchOwnAccountsService() {
    return this.http.get<any>('https://rickandmortyapi.com/api/character').pipe(
      map((character) => {
        console.log('getting Rik and Morty', character);
        return character.results;
      }),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getPeople() {
    return this.subjectPeople;
  }

  updatePeople(parametro: string) {
    this.result.character[0].name = parametro;
    this.subjectPeople.next(this.result.character);
  }

  setPeople() {
    if (this.result.character.length === 0) {
      this.fetchOwnAccountsService().subscribe((res) => {
        console.log('se hizo peticion');

        this.result.character = res;
        this.subjectPeople.next(this.result.character);
      });
    } else {
      console.log('sin hacer peticion');

      this.subjectPeople.next(this.result.character);
    }
  }
}
