import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedHoodComponent } from './components/red-hood/red-hood.component';
import { ComponenteComponent } from './components/componente/componente.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { WaynesComponent } from './components/waynes/waynes.component'
const routes: Routes = [
  {
    path: '', component: ComponenteComponent
  },
  {
  path: 'cambio', component: RedHoodComponent
  },
  {
    path: 'cambio2', component: HijoComponent
  },
  {
    path: 'cambio3', component: WaynesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
