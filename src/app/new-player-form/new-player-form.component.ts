import {Component, OnInit} from '@angular/core';
import {Player, PlayerService, PlayerTypes} from "../player.service";
import {FormControl} from "@angular/forms";
import {GameService} from "../game.service";
import {Router} from "@angular/router";


@Component({
  selector: 'new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.sass']
})
export class NewPlayerFormComponent implements OnInit {
  types  : PlayerTypes[]
  playerNameControl = new FormControl('');
  playerTypeControl = new FormControl('')

  constructor(private playerService: PlayerService, private gameService: GameService, private routerService: Router ) { }

  ngOnInit(): void {
    this.types = this.playerService.playerTypes
  }

  generatePlayer() {
    let player:Player = this.playerService.generatePlayer(this.playerNameControl.value, this.playerTypeControl.value);
    this.gameService.newGame(player)
    this.routerService.navigateByUrl('/game')
  }

}
