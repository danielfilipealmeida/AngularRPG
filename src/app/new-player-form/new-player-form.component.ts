import {Component, OnInit} from '@angular/core';
import {Player, PlayerService, PlayerTypes} from "../player.service";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.sass']
})
export class NewPlayerFormComponent implements OnInit {
  types  : PlayerTypes[]
  playerNameControl = new FormControl('');
  playerTypeControl = new FormControl('')

  constructor(private service: PlayerService) { }

  ngOnInit(): void {
    this.types = this.service.playerTypes
  }

  generatePlayer() {
    let player:Player = this.service.generatePlayer(this.playerNameControl.value, this.playerTypeControl.value);
    console.log(player);
  }

}
