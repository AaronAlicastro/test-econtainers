import { Component, OnInit } from '@angular/core';
import { Event, RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  public block: any = [];
  isInBlock = false;
  subscriber: any;

  constructor(public router: Router) {
    this.subscriber = router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      if (e["url"] == "/") {
        this.isInBlock = false;
      } else {
        this.isInBlock = true;
        this.block = e["url"].replace("/", "").trim().split("/").map((pl:any) => {
          return pl.replaceAll("$", " ");
        });
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriber?.unsubscribe();
  }
}
