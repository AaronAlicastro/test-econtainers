import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { ServiceApiHeroService } from '../service-api-hero.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  twentyHeros: Hero[] = [];
  viewHero: Hero = {
    id: 0,
    name: "",
    slug: "",
    powerstats: {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0
    },
    appearance: {
      gender: "",
      race: "",
      height: [],
      weight: [],
      eyeColor: "",
      hairColor: ""
    },
    biography: {
      fullName: "",
      alterEgos: "",
      aliases: [],
      placeOfBirth: "",
      firstAppearance: "",
      publisher: "",
      alignment: ""
    },
    work: {
      occupation: "",
      base: ""
    },
    connections: {
      groupAffiliation: "",
      relatives: ""
    },
    images: {
      xs: "",
      sm: "",
      md: "",
      lg: ""
    }
  }
  public busqueda = "";
  heroId: any = this.route.snapshot.params["heroId"];
  verHero = { no: true, si: false }

  constructor(private request: ServiceApiHeroService, private route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (this.heroId) {
      this.verHero.si = true;
      this.verHero.no = false;
      this.heroId = this.heroId.split("$")[0];
      this.request.getHero(this.heroId).subscribe({
        next: data => {
          this.viewHero = data;
        },
        error: e => { console.log(e); }
      });
    } else {
      this.verHero.si = false;
      this.verHero.no = true;
      this.request.getHeroAleatorio().subscribe({
        next: data => {
          for (let i = 0; i < 20; i++) {
            let aleatorio = Math.floor(Math.random() * data.length);
            this.twentyHeros.push(data[aleatorio]);
          }
        },
        error: e => { console.log(e); }
      });
    }
  }

  clickOnHero(hero: Hero) {
    this.verHero.si = true;
    this.verHero.no = false;
    let fullName = "$" + hero.id;
    hero.biography.fullName.trim().split(" ").forEach(pl => fullName += "$" + pl);
    this._router.navigate(["/home/" + fullName.trim().replace("$", "")]);
  }

  findByName() {
    this.verHero.si = false;
    this.verHero.no = true;
    this.request.getHeroAleatorio().subscribe({
      next: data => {
        this.twentyHeros = data.filter(hr => { return hr.name.toLocaleLowerCase().includes(this.busqueda) || hr.biography.fullName.toLocaleLowerCase().includes(this.busqueda) });
      },
      error: e => { console.log(e); }
    });

    return false;
  }
}
