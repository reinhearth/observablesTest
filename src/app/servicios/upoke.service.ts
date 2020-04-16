import { Injectable } from '@angular/core';
import { TestObservablesService } from '../test-observables.service';

@Injectable({
  providedIn: 'root'
})
export class UpokeService {

  constructor(private service: TestObservablesService) {  }
  update(pokemon: string) {
    this.service.updatePeople(pokemon);
  }

}
