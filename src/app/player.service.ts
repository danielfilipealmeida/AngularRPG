import { Injectable } from '@angular/core';




export type PlayerTypes = "fighter" | "wizard" | "bard" | "elf" | "thief";

const startHealth = 10;
const baseTypePoints = {
  'fighter': {
    'attackPoints': 5,
    'defensePoints': 5,
    'magicPoints': 0
  },
  'wizard': {
    'attackPoints': 2,
    'defensePoints': 3,
    'magicPoints': 5
  },
  'bard': {
    'attackPoints': 3,
    'defensePoints': 5,
    'magicPoints': 2
  },
  'elf': {
    'attackPoints': 3,
    'defensePoints': 3,
    'magicPoints': 4
  },
  'thief': {
    'attackPoints': 3,
    'defensePoints': 5,
    'magicPoints': 2
  }
};

export interface Character {
  name: string;
  type: PlayerTypes;
  healthPoints: number;
  attackPoints: number;
  defensePoints: number;
  magicPoints: number;
}

export class Player {
  name: string;
  type: PlayerTypes;
  healthPoints: number;
  attackPoints: number;
  defensePoints: number;
  magicPoints: number;

  constructor(name:string, type:PlayerTypes) {
    this.name = name;
    this.type = type;

    this.healthPoints =  startHealth;

    this.attackPoints = baseTypePoints[type].attackPoints;
    this.defensePoints = baseTypePoints[type].defensePoints;
    this.magicPoints = baseTypePoints[type].magicPoints;
  }


}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerTypes:PlayerTypes[] = ['fighter', 'wizard', 'bard', 'elf', 'thief'];

  constructor() { }

  generatePlayer(name: string, type:PlayerTypes): Player
  {
    let character:Player = new Player(name, type)

    return character
  }
}
