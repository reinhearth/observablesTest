import { Injectable } from '@angular/core';
import { TestObservablesService2 } from '../test2-observables.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RickmortyService {

  personajesFilter: any = [];

  constructor(private service: TestObservablesService2 ) {  }

  fetchRickMorty(): Observable<any> {
    return this.service.getPeople().pipe(
      map((character) => {
        this.personajesFilter = character;
        console.log(this.personajesFilter[0].name, 'actualizado RickMorty');
        return this.personajesFilter;
    })
    );
  }

  getRickMorty(): Observable<any> {
    return this.fetchRickMorty();
  }
}
