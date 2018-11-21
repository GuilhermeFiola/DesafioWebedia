import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  private allNewsEntrypoint: string = 'https://newsapi.org/v2/everything';
  private topNewsEntrypoint: string = 'https://newsapi.org/v2/top-headlines';

  private httpOptions = {
    headers: new HttpHeaders({
      'x-api-key': '',
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getAllNews() {
    return this.http.get(this.allNewsEntrypoint + '?q=bitcoin&from=2018-10-21&sortBy=publishedAt', this.httpOptions);
  }

  getTopNews() {
    return this.http.get(this.topNewsEntrypoint);
  }
}