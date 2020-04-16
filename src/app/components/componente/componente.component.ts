import { Component, OnInit } from '@angular/core';
import { TestObservablesService } from 'src/app/test-observables.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PokeService } from 'src/app/agrupador/poke.service';
import { RickmortyService } from 'src/app/agrupador/rickmorty.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss']
})
export class ComponenteComponent implements OnInit {

  pokemon;
  rickandmorty;

  constructor(private service: PokeService,
              private serviceRick: RickmortyService) {
   }

  ngOnInit() {
    this.service.getPoke().subscribe(x => {
      console.log(x[0].name);

      this.pokemon = x[0].name;
    } );
    this.serviceRick.getRickMorty().subscribe(x => {
      console.log(x[0].name);
      this.rickandmorty = x[0].name;
    });
  }

}
