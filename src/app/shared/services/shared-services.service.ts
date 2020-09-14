import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {
pageProgressBar = new EventEmitter();
constructor() { }

}
