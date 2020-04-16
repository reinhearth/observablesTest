import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestObservablesService } from './test-observables.service';
import { ComponenteComponent } from './components/componente/componente.component';
import { PokeService } from './agrupador/poke.service';
import { RegistrosComponent } from './components/jokers/registros.component';
import { UpokeService } from './servicios/upoke.service';
import { RedHoodComponent } from './components/red-hood/red-hood.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { RickmortyService } from './agrupador/rickmorty.service';
import { WaynesComponent } from './components/waynes/waynes.component';


@NgModule({
  declarations: [AppComponent, ComponenteComponent, RegistrosComponent, RedHoodComponent, HijoComponent, WaynesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TestObservablesService, PokeService, UpokeService, RickmortyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
