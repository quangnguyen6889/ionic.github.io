import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-all-news',
    templateUrl: './all-news.page.html',
    styleUrls: ['./all-news.page.scss'],
})
export class AllNewsPage implements OnInit {

    public news = [
        {
            img: "https://www.guglytech.com/wp-content/uploads/2020/04/Business-with-the-Latest-Technology-Trends-GuglY-Tech.jpg",
            title: 'Ngân hàng đồng hành cùng doanh nghiệp, doanh nhân và người dân vượt "bão" Covid-19'
        },
        {
            img: "https://stawiindustries.com/wp-content/uploads/2018/09/Financing-a-Business-Purchase.jpg",
            title: "Ngân hàng dành nhiều ưu đãi cho khách hành mở và giao dịch thẻ trực tuyến"
        },
        {
            img: "https://innovativebusinessandlegal.com/wp-content/uploads/2018/04/Business-merger-marriage-1280x720.jpg",
            title: "Các ngân hàng liên kết tạo quỹ chống suy thoái trước tình cảnh kinh tế ảnh hưởng dịch"
        },
        {
            img: "https://cafesach.com.vn/wp-content/uploads/2019/09/bussiness.jpg",
            title: "Bản tin kinh tế - tình hình kinh tế quý 1 năm 2020"
        }
    ]

    constructor(private router: Router) { }

    ngOnInit() {
    }

    detail() {
        debugger
        this.router.navigate(['/news-detail'], {
            queryParams: this.news,
        });
    }

}
