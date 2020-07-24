import { Injectable } from '@angular/core';
import {Player} from "./player.service";


@Injectable({
  providedIn: 'root'
})
export class GameService {
  player: Player
  gameRunning:boolean = false

  constructor() {

  }

  newGame(player:Player)
  {
    this.player = player
    this.gameRunning  = true
  }


}

