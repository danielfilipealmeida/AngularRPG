import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { Player } from "./player.service";

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create new game', () => {
    const player:Player = new Player('Rambo', 'fighter');
    service.newGame(player);
  })
});
