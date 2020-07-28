import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import {GameService} from "../game.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MapService} from "../map.service";
import {PlayerService} from "../player.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        PlayerService,
        GameService,
        MapService
      ],
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  /*
  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  */

  it('should create', () => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
