import { Component, OnInit } from '@angular/core';
import { CONSTS } from "../service-api-hero.service";

@Component({
  selector: 'app-blocks-view',
  templateUrl: './blocks-view.component.html',
  styleUrls: ['./blocks-view.component.css']
})
export class BlocksViewComponent implements OnInit {
  public url_app: String = CONSTS.url_app;

  constructor() { }

  ngOnInit(): void {
  }

}
