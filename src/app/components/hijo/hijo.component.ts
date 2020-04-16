import { Component, OnInit } from '@angular/core';
import { UpokeService } from 'src/app/servicios/upoke.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  constructor(public service: UpokeService) { }

  ngOnInit() {
  }

}
