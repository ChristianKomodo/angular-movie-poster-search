import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMovie(movieID: string) {
    return this.http.get(`http://www.omdbapi.com/?i=${movieID}&plot=long&apikey=9baa487f`);
  }

  getMovieBySearch(searchTerm: string) {
    return this.http.get(`https://www.omdbapi.com/?s=${searchTerm}&page=1&type=movie&apikey=9baa487f`);
  }
}
