import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes: Hero[] = [
      {id: 1, name: 'Hulk'},
      {id: 2, name: 'Homem-Aranha'},
      {id: 3, name: 'Homem de Ferro'},
      {id: 4, name: 'Viúva Negra'},
      {id: 5, name: 'Pantera Negra'},
      {id: 6, name: 'Superman'},
      {id: 7, name: 'Batman'},
      {id: 8, name: 'Wonder Woman'}
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    const heroIds = heroes.map(hero => hero.id);

    const maxId = Math.max(...heroIds);

    const nextId = heroes && heroes.length > 0 ? maxId + 1 : 1;

    return nextId;
  }
}
