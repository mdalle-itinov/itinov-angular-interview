import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "./shared/model/Movie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  fetchMovies() : Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>("assets/movies.json");
  }
}
