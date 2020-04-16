import { Injectable } from '@angular/core';
import { TestObservablesService2 } from '../test2-observables.service';

@Injectable({
  providedIn: 'root'
})
export class UpdaterickService {

  constructor(private service: TestObservablesService2) { }
  update(personaje: string) {
    this.service.updatePeople(personaje);
  }
}
