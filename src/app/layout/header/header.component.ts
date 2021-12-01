import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _title;

  constructor() {
    this._title = "Petinder";
  }

  ngOnInit(): void {

  }

  get title() {
    return this._title;
  }
}
