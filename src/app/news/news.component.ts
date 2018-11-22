import { Component, AfterViewInit } from '@angular/core';
import { HttpService } from '../services/http.service';

const listItens: any = {
  articles: [
  {
    author: null,
    title: "Daily Hacker News for 2018-11-20",
    description: "The 10 highest-rated articles on Hacker News on November 20, 2018 which have not appeared on any previous Hacker News Daily are: Post-REST (comments) Show HN: Self-Driving Pi Car (comments) Web scraping case fails under Supreme Court's Dastar doctrine (commen…",
    url: "http://www.daemonology.net/hn-daily/2018-11-20.html",
    urlToImage: "https://www.w3schools.com/images/w3schools_green.jpg",
    publishedAt: "2018-11-21T00:00:00Z",
    content: "The 10 highest-rated articles on Hacker News on November 20, 2018 which have not appeared on any previous Hacker News Daily are: Hacker News Daily is sponsored by Triplebyte. Beat Triplebyte's online coding quiz. Get multiple job offers fast. Skip resumes &am… [+13 chars]"
  },
  {
    author: null,
    title: "Daily Hacker News for 2018-11-20",
    description: "The 10 highest-rated articles on Hacker News on November 20, 2018 which have not appeared on any previous Hacker News Daily are: Post-REST (comments) Show HN: Self-Driving Pi Car (comments) Web scraping case fails under Supreme Court's Dastar doctrine (commen…",
    url: "http://www.daemonology.net/hn-daily/2018-11-20.html",
    urlToImage: null,
    publishedAt: "2018-11-21T00:00:00Z",
    content: "The 10 highest-rated articles on Hacker News on November 20, 2018 which have not appeared on any previous Hacker News Daily are: Hacker News Daily is sponsored by Triplebyte. Beat Triplebyte's online coding quiz. Get multiple job offers fast. Skip resumes &am… [+13 chars]"
  },
  {
    author: null,
    title: "Daily Hacker News for 2018-11-20",
    description: "The 10 highest-rated articles on Hacker News on November 20, 2018 which have not appeared on any previous Hacker News Daily are: Post-REST (comments) Show HN: Self-Driving Pi Car (comments) Web scraping case fails under Supreme Court's Dastar doctrine (commen…",
    url: "http://www.daemonology.net/hn-daily/2018-11-20.html",
    urlToImage: "https://fs.bitcoinmagazine.com/img/images/Bakkt_Ice_update.max-800x800.jpg",
    publishedAt: "2018-11-21T00:00:00Z",
    content: "The 10 highest-rated articles on Hacker News on November 20, 2018 which have not appeared on any previous Hacker News Daily are: Hacker News Daily is sponsored by Triplebyte. Beat Triplebyte's online coding quiz. Get multiple job offers fast. Skip resumes &am… [+13 chars]"
  }, {
    author: null,
    title: "Daily Hacker News for 2018-11-20",
    description: "The 10 highest-rated articles on Hacker",
    url: "http://www.daemonology.net/hn-daily/2018-11-20.html",
    urlToImage: null,
    publishedAt: "2018-11-21T00:00:00Z",
    content: "The 10 highest-rated articles on Hacker News on November 20, 2018 which have not appeared on any previous Hacker News Daily are: Hacker News Daily is sponsored by Triplebyte. Beat Triplebyte's online coding quiz. Get multiple job offers fast. Skip resumes &am… [+13 chars]"
  },
  {
    author: null,
    title: "Daily Hacker News for 2018-11-20",
    description: "The 10 highest-rated articles on Hacker News on November 20, 2018 which have not appeared on any previous Hacker News Daily are: Post-REST (comments) Show HN: Self-Driving Pi Car (comments) Web scraping case fails under Supreme Court's Dastar doctrine (commen…",
    url: "http://www.daemonology.net/hn-daily/2018-11-20.html",
    urlToImage: null,
    publishedAt: "2018-11-21T00:00:00Z",
    content: "The 10 highest-rated articles on Hacker News on November 20, 2018 which have not appeared on any previous Hacker News Daily are: Hacker News Daily is sponsored by Triplebyte. Beat Triplebyte's online coding quiz. Get multiple job offers fast. Skip resumes &am… [+13 chars]"
  },
  {
    author: null,
    title: "Daily Hacker News for 2018-11-20",
    description: "The 10 highest-rated articles on Hacker News on November 20, 2018 which have not appeared on any previous Hacker News Daily are: Post-REST (comments) Show HN: Self-Driving Pi Car (comments) Web scraping case fails under Supreme Court's Dastar doctrine (commen…",
    url: "http://www.daemonology.net/hn-daily/2018-11-20.html",
    urlToImage: null,
    publishedAt: "2018-11-21T00:00:00Z",
    content: "The 10 highest-rated articles on Hacker News on November 20, 2018 which have not appeared on any previous Hacker News Daily are: Hacker News Daily is sponsored by Triplebyte. Beat Triplebyte's online coding quiz. Get multiple job offers fast. Skip resumes &am… [+13 chars]"
  }]
};

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements AfterViewInit {

  news: any = {};
  colectionSize: number = 0;
  pageSize: number = 2;
  maxSize: number = 4;

  constructor(private httpService: HttpService) { }

  ngAfterViewInit() {
    this.getTopNews(1);
  }

  getTopNews(pageNumber: number) {
    this.httpService.getTopNews(pageNumber, this.pageSize).subscribe((newsResponse) => {
      this.news = <any>newsResponse;
      this.colectionSize = newsResponse.totalResults !== NaN ? newsResponse.totalResults : 0;
      console.log(this.news);
      console.log(this.colectionSize);
    }, (error) => {
      console.log(error);
    });
  }

  loadPage(pageNumber: number) {
    this.getTopNews(pageNumber);

    if (pageNumber >= 4 && pageNumber <= (this.colectionSize / this.pageSize) - 2) {
      this.maxSize = 3;
    } else {
      this.maxSize = 4;
    }
  }

}
