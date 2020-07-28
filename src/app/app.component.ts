import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "./game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'RPG game';
  router: Router;

  constructor(private _router:Router, private gameService:GameService) {
    this.router = _router

    console.log(this.gameService)
  }

}
