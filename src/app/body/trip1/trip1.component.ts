import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip1',
  templateUrl: './trip1.component.html',
  styleUrls: ['./trip1.component.css']
})
export class Trip1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  openMap(): void {
    window.open('https://goo.gl/maps/KwT9TiotVCn2MkqcA');
  }
}
