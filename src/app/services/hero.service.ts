import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // this is a synchronous call
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // this is an asynchronous call
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }
}

/* This is an example of a typical service-in-service scenario in which you inject the MessageService into the HeroService which is injected into the HeroesComponent. */