import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopnavbarComponent,
    SuggestionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
