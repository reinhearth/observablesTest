import { Component, OnInit } from '@angular/core';
import { UpokeService } from 'src/app/servicios/upoke.service';
import { UpdaterickService } from 'src/app/servicios/updaterick.service';

@Component({
  selector: 'app-red-hood',
  templateUrl: './red-hood.component.html',
  styleUrls: ['./red-hood.component.scss']
})
export class RedHoodComponent implements OnInit {

  constructor(public service: UpokeService,
              public rickmorty: UpdaterickService) { }

  ngOnInit() {
  }

}
