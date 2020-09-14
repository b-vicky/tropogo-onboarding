import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  mode: string;
  value: number;
  constructor(private sharedServices: SharedServicesService) { }

  ngOnInit() {
    this.mode = 'determinate';
    this.value = 40;
    this.sharedServices.pageProgressBar.subscribe(eventProgress => {
      console.log('Log: HeaderComponent -> ngOnInit -> eventProgress', eventProgress);
      this.value = eventProgress;
    });
  }
}
