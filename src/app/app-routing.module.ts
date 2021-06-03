import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StatelessPageComponent} from './stateless-page/stateless-page.component';
import {StatefulPageComponent} from './stateful-page/stateful-page.component';
import { StatefulPage2Component } from './stateful-page2/stateful-page2.component';
const routes: Routes = [
  {  path: '',  component: StatelessPageComponent},
  {  path: 'stateless',  component: StatelessPageComponent},
  {  path: 'stateful1',  component: StatefulPageComponent},
  {  path: 'stateful2',  component: StatefulPage2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
