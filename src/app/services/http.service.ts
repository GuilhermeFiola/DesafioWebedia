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

  getAllNews(page: number, pageSize: number) {
    return this.http.get(this.allNewsEntrypoint + '?country=br&pageSize=' + pageSize + '&page=' + page, this.httpOptions);
  }

  getTopNews(page: number, pageSize: number) {
    return this.http.get(this.topNewsEntrypoint + '?country=br&pageSize=' + pageSize + '&page=' + page, this.httpOptions);
  }
}