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

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getMovie().subscribe(data => {
      this.movie = data;
      console.log('this.movie is', data);
    });
  }
}
