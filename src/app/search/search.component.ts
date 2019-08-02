import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  title = 'Movie Search';
  movieSearch: Object;
  searchTermEntered: string;
  foundMovies: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onMovieSearch(searchTerm: string) {
    this.data.getMovieBySearch(searchTerm).subscribe((data: any) => {
      this.foundMovies = data.Search;
      console.log('found movies array is', this.foundMovies);
    });
  }

  // onMovieSearch(searchTerm: string) {
  //   this.data.getMovieBySearch(searchTerm).subscribe((data: any) => {
  //     if (!data.Search) {
  //       this.foundMovie = {
  //         Title: 'Movie Not Found',
  //         imdbID: '',
  //         Poster: 'http://fpoimg.com/300x100?text=Movie-Not-Found'
  //       }
  //     } else {
  //       this.foundMovie = data.Search[0];
  //     }
  //     console.log('found movie is', this.foundMovie);
  //   });
  // }

  onSearchEntered(event: any) {
    this.searchTermEntered = event.target.value;
    this.onMovieSearch(this.searchTermEntered);
  }

}
