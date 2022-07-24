import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartemementComponent } from './departemement/departemement.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
  {path: "region", component: RegionsComponent},
  {path: 'departement', component: DepartemementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
