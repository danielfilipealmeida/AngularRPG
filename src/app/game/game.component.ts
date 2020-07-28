import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../player.service";
import {GameService} from "../game.service";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {MapService} from "../map.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  //let action:Observable<string>
  action:string = null;

  constructor(
    private playerService: PlayerService,
    private gameService: GameService,
    private mapService: MapService,
    private router:Router,
    private route:ActivatedRoute
  ) {

    this.route.data.subscribe(data => {
      this.action  = data["action"]
    })
  }

  ngOnInit(): void {
    if (this.action === 'quit') {
      this.gameService.quit();
    }

    if (!this.gameService.gameRunning) {
      this.router.navigateByUrl('/new')
    }
  }

}
