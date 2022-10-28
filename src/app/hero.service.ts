import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'; //URL to web api

  constructor( private http: HttpClient, private messageService: MessageService) { }

 private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified 'id' always exists.
    // Error handling will be added in the next step of the tutorial.

    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=%{id}`);
    this.log(`fetched hero id=%{id}`);
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHeroes_Version_1_FROMHEROES():Hero[]{
    return HEROES;
  }

  getHeroes_Version_2_ObservableEmitsConstHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
