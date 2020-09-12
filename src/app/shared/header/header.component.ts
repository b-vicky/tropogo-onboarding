import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  mode: string;
  value: number;
  constructor() { }

  ngOnInit() {
    this.mode = 'determinate';
    this.value = 40;
  }
}
