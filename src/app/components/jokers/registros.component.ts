import { Component, OnInit } from '@angular/core';
import { UpokeService } from 'src/app/servicios/upoke.service';
import { UpdaterickService } from 'src/app/servicios/updaterick.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {

  constructor(public service: UpokeService,
              public rickmorty: UpdaterickService) { }

  ngOnInit() {
  }


}
