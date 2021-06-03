import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StatelessPageComponent } from './stateless-page/stateless-page.component';
import { StatefulPageComponent } from './stateful-page/stateful-page.component';


@NgModule({
  declarations: [
    AppComponent,
    StatelessPageComponent,
    StatefulPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
