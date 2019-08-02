import { Component } from '@angular/core';
import { DataService } from './data.service';
// import { forOwn } from 'lodash/forOwn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  whichPage: string;
  movie: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    // Start on the Poster page
    this.whichPage = 'search';

    // Get Battle Angel as an example
    this.data.getMovie('tt0437086').subscribe(data => {
      this.movie = data;
      console.log('this.movie is', this.movie);
    });

  }

  // Setter for nav
  setDestination(newPage) {
    this.whichPage = newPage;
  }

}
