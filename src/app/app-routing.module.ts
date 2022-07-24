import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// j'importe ici mes components créer

const routes: Routes = [
  // je met ici les routes
  // {path: "", component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
