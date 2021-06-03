import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StatelessPageComponent} from './stateless-page/stateless-page.component';
import {StatefulPageComponent} from './stateful-page/stateful-page.component';
const routes: Routes = [
  {  path: 'stateless',  component: StatelessPageComponent},
  {  path: 'stateful',  component: StatefulPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
