import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  //Q: We don't have to type this?
  //   Is this because it's typed in mock-heroes.ts?
  //   Hovering over heroes I get this "(property) HeroesComponent.heroes: Hero[]"
  //   So it looks like it knows the type from the const.
  //
  //   And this is just typescript (or maybe even javasript), right?
  // For step 2
  heroes:Hero[] = [];
  selectedHero?:Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  //getHeroes(): void {
  //  this.heroes = this.heroService.getHeroes();
  //}

  /*
  We got rid of this in Step 5. Add Navigation
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
*/
  //Q: So this is an interface, vs. heroes which is a constant.
  //   With an interface do you need to make sure you implement it fully?
  //   And in this case with the interface just being a class, we need to make sure we
  //   implemnent each member of the class - which in this case is just id: number and name: string?
  /* This was for step 1
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  */



}
