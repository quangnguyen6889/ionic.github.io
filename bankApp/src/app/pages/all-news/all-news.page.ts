import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
    selector: 'app-all-news',
    templateUrl: './all-news.page.html',
    styleUrls: ['./all-news.page.scss'],
})
export class AllNewsPage implements OnInit {
    public news: any[];

    constructor(public router: Router, private newsService: NewsService) { }

    ngOnInit() {
        this.news = this.newsService.getListNews();
    }

    detail(news) {
        this.router.navigate(['/news-detail'], {
            queryParams: { id: news.id },
        });
    }

    // detail() {
    //     this.router.navigate(['/news-detail'], {
    //         queryParams: {
    //             value: JSON.stringify(this.news)
    //         },
    //     });
    // }
}
