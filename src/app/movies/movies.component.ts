import {Component} from '@angular/core';
import {Movie} from '../shared/model/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  private readonly movies: Array<Movie>;

  constructor() {
    this.movies = [new Movie("Le parrain", "https://media.posterlounge.com/images/big/1878326.jpg"), new Movie("Retour vers le futur", "https://s1.rockagogostatic.com/ref/pp/pp0830/poster-retour-vers-le-futur-back-to-the-future-first-cover-pr.jpg")];
  }

  getMovies() {
    return this.movies;
  }
}
