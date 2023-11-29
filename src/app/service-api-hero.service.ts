import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiHeroService {

  constructor(private http: HttpClient) { }

  getHero(id: string) {
    return this.http.get<Hero>("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/" + id + ".json");
  }

  getHeroAleatorio() {
    return this.http.get<Hero[]>("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");
  }
}

export const CONSTS = {
  url_app: "https://aaronalicastro.github.io/test-econtainers"
}