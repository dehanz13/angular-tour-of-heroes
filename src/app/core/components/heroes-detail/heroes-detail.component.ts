import { Component, Input } from '@angular/core';

import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.sass']
})
export class HeroesDetailComponent {
  // @Input() selectedHero?: Hero;
  @Input() hero?: Hero;
}
