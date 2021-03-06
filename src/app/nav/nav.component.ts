import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() destinationChange = new EventEmitter();
  destination = 'default';

  constructor() { }

  ngOnInit() {
  }

  navigateTo(newDestination) {
    this.destination = newDestination;
    this.destinationChange.emit(this.destination);
  }

}
