import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

    selectedHero: Hero;
    heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero) {
      this.selectedHero = hero;
  }

}
