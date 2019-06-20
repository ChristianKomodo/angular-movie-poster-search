import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Multiple HTTP get() Methods';
  movie: Object;
  movieSearch: Object;
  searchTermEntered: string;
  foundMovie: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    // Get Battle Angel as an example
    this.data.getMovie('tt0437086').subscribe(data => {
      this.movie = data;
    });
  }

  onMovieSearch(searchTerm) {
    this.data.getMovieBySearch(searchTerm).subscribe((data: any) => {
      this.foundMovie = data.Search[0];
    });
  }

  onSearchEntered(event: any) {
    this.searchTermEntered = event.target.value;
    this.onMovieSearch(this.searchTermEntered);
  }

}
