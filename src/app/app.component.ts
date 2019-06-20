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
  // foundMovies: any[];
  foundMovie: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMovie('tt0437086').subscribe(data => {
      this.movie = data;
    });
  }

  onMovieSearch(searchTerm) {
    this.data.getMovieBySearch(searchTerm).subscribe(data => {
      this.foundMovie = data.Search[0];
      console.log('all found movies:', data.Search);
      console.log('this.foundMovie is', this.foundMovie);
    });
  }

  onSearchEntered(event: any) {
    this.searchTermEntered = event.target.value;
    // console.log('search term is now', this.searchTermEntered);
    this.onMovieSearch(this.searchTermEntered);
  }

}
