import { Injectable } from '@angular/core';
import { TestObservablesService } from '../test-observables.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  pokemonFilter: any = [];

  constructor(private service: TestObservablesService ) {  }

  fetchPokemons(): Observable<any> {
    return this.service.getPeople().pipe(
      // map((poke) => poke.filter( (pokemon) => pokemon.name === 'bulbasaur' )),
      map((poke) => {
        this.pokemonFilter = poke;
        console.log(this.pokemonFilter[0].name, 'actualizado');
        return this.pokemonFilter;
    })
    );
  }

  getPoke(): Observable<any> {
    return this.fetchPokemons();
  }
}
