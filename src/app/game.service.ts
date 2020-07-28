import { Injectable } from '@angular/core';
import {Player} from "./player.service";




@Injectable({
  providedIn: 'root'
})
export class GameService {
  player: Player
  gameRunning:boolean = false


  constructor() {
    this.loadData()
  }

  newGame(player:Player)
  {
    this.player = player
    this.gameRunning  = true

    this.saveData()
  }

  saveData() {
    localStorage.setItem("game", JSON.stringify(this));
  }

  loadData() {
    let data = JSON.parse(localStorage.getItem("game"));
    if (data==null) {
      return;
    }

    this.player = data.player;
    this.gameRunning = data.gameRunning
  }

  quit() {
    this.player = null;
    this.gameRunning = false;
    this.saveData();
  }

}

