import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  title = 'Movie Poster Search';
  movieSearch: Object;
  searchTermEntered: string;
  foundMovie: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onMovieSearch(searchTerm: string) {
    this.data.getMovieBySearch(searchTerm).subscribe((data: any) => {
      if (!data.Search) {
        this.foundMovie = {
          Title: 'Movie Not Found',
          imdbID: '',
          Poster: 'http://fpoimg.com/300x100?text=Movie-Not-Found'
        }
      } else {
        this.foundMovie = data.Search[0];
      }
      console.log('found movie is', this.foundMovie);
    });
  }

  onSearchEntered(event: any) {
    this.searchTermEntered = event.target.value;
    this.onMovieSearch(this.searchTermEntered);
  }

}
