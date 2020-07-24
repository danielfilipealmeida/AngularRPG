import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPlayerFormComponent } from './new-player-form/new-player-form.component';

import { ReactiveFormsModule } from "@angular/forms";
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPlayerFormComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
