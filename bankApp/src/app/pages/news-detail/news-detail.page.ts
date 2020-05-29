import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NewsService } from './../../services/news.service';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.page.html',
    styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
    news: any;

    constructor(public activatedRoute: ActivatedRoute, private newsService: NewsService) {
        this.activatedRoute.queryParams.subscribe((params) => {
            console.log(params);

            this.news = this.newsService.getNewsById(params.id);
            console.log(this.news);
        });

        // this.activatedRoute.queryParams.subscribe((res) => {
        //     this.news = JSON.parse(res.value);
        // });
    }

    ngOnInit() {
    }

}
