import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewPlayerFormComponent} from "./new-player-form/new-player-form.component";
import {GameComponent} from "./game/game.component";

const routes: Routes = [
  { path: 'new', component: NewPlayerFormComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
