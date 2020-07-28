import { TestBed } from '@angular/core/testing';

import {GameMap, MapService} from './map.service';


describe('GameMap class', () => {
  it('should be created', () => {
    let  gameMap:GameMap = new GameMap(100, 100);

    expect(gameMap).toBeDefined();
    expect(gameMap.height).toBe(100);
    expect(gameMap.width).toBe(100);
  })
});

describe('MapService', () => {
  let service: MapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapService);
  });

  /*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   */
});
