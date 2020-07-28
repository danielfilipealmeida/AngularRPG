import { Injectable } from '@angular/core';


enum GameMapCellType {
  Void = 0,
  TileFloor,
  StoneWall,
  Grass,
  Trees,
  Sand,
  Water
}

export interface GameMapCellInterface {
  type: GameMapCellType,
}

export class GameMapCell {
  type: GameMapCellType;

  constructor(type:GameMapCellType) {
  }
}

export class GameMap {
  width: number;
  height: number;
  map:GameMapCell[]

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.map = Array();

    for (let f=0; f < width * height; f++) {
      let newCell:GameMapCellInterface = new GameMapCell(GameMapCellType.Void);

      this.map.push(newCell);
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class MapService {
  defaultGameMapSettings = {
    "width": 20,
    'height': 20
  };

  constructor() { }

  new(configuration:[string, any]):GameMap {
    let config = Object.assign(this.defaultGameMapSettings, configuration);

    let newMap = new GameMap(config.width, config.height);

    return newMap;
  }
}
