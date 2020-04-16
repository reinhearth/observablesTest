import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestObservablesService } from './test-observables.service';
import { TestObservablesService2 } from './test2-observables.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'observablesTest';
  constructor(private service: TestObservablesService,
              private serviceRick: TestObservablesService2) {
    this.service.setPeople();
    this.serviceRick.setPeople();
  }
  ngOnInit() {
    this.service.getPeople().subscribe((res) => {
      console.log('sub1');
      console.log(res);
    });

    // this.service.getPeople().subscribe((res) => {
    //   console.log("sub2");
    //   console.log(res);
    // });
  }

  updatePeople(id: string) {
    console.log(id);
   // this.service.updatePeople();
  }

  getResult(id: string) {
    console.log(id);
    this.service.result.pokemons = [];
    this.service.setPeople();
  }

  ngOnDestroy() {
    // desuscription
  }
}
