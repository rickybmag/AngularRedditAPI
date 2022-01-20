import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  urlBase: string = "https://www.reddit.com/r/";
  constructor(private http: HttpClient) { }

  // GetRedditPost(): Observable<any> {
  //   let fullURL: string = `${this.urlBase}aww/.json`;
  //   let result: Observable<any> = this.http.get(fullURL);
  //   return result;
  // }

  SearchRedditByPost(post: string): Observable<any> {
    let fullURL: string = `${this.urlBase}/${post}/.json`;
    let result: Observable<any> = this.http.get(fullURL);
    console.log(fullURL);
    console.log(result);
    return result;
  }

}
