import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
// import { HEROES } from '../models/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero; // DEAD CODE

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    style: 'Range '
  };

  constructor(private heroService: HeroService, private messageService: MessageService) {}
    
  ngOnInit(): void {
    this.getHeroes();
  }
  // DEAD CODE
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    // this is a synchronous signature - this version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response. That won't work when the HeroService is actually making requests of a remote server.
    // this.heroes = this.heroService.getHeroes();

    // this is an asynchronous signature using Observable - this version waits for the Observable to emit the array of heroes, which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property. This asynchronous approach works when the HeroService requests heroes from the server.
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
