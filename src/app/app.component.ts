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
  foundMovies: Object;
  foundMovieTitle: string;
  foundMovieID: string;
  foundMoviePosterURL: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMovie('tt0437086').subscribe(data => {
      this.movie = data;
      console.log('this.movie is', this.movie);
    });
  }

  onMovieSearch(searchTerm) {
    this.data.getMovieBySearch(searchTerm).subscribe(data => {
      this.foundMovies = data;
      console.log('this.foundMovies is', this.foundMovies);
      this.foundMovieTitle = this.foundMovies.Search[0].Title;
      this.foundMovieID = this.foundMovies.Search[0].imdbID;
      this.foundMoviePosterURL = this.foundMovies.Search[0].Poster;
      console.log('this.foundMovieID is', this.foundMovieID);
    });
  }

  onSearchEntered(event: any) {
    this.searchTermEntered = event.target.value;
    // console.log('search term is now', this.searchTermEntered);
    this.onMovieSearch(this.searchTermEntered);
  }

}
