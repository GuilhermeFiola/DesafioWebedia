import { Component, AfterViewInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements AfterViewInit {

  news: any = {};

  constructor(private httpService: HttpService) { }

  ngAfterViewInit() {
    this.getAllNews();
  }

  getAllNews() {
    this.httpService.getAllNews().subscribe((newsResponse) => {
      this.news = newsResponse;
      console.log(this.news);
    }, (error) => {
      console.log(error);
    });
  }

}
