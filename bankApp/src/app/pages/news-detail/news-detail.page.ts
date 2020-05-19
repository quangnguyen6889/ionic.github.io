import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  news: any[] = [];
  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((res) => {
      if (res) {
        this.news = res.data;
        console.log(this.news);
      }
    });
  }

  ngOnInit() {
  }

}
