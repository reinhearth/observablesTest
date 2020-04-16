import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/agrupador/poke.service';
import { RickmortyService } from 'src/app/agrupador/rickmorty.service';
import { zip, forkJoin, combineLatest } from 'rxjs';


@Component({
  selector: 'app-waynes',
  templateUrl: './waynes.component.html',
  styleUrls: ['./waynes.component.scss']
})
export class WaynesComponent implements OnInit {

  pokemon;
  rick;


  constructor(private service: PokeService,
              private rickmorty: RickmortyService) { }

  ngOnInit() {

    combineLatest(this.service.getPoke(), this.rickmorty.getRickMorty()).subscribe(([pokemon, rick]) => {
      this.pokemon = pokemon;
      this.rick = rick;
    });

  }

}
