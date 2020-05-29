import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {
    public news = [
        {
            img: "https://www.guglytech.com/wp-content/uploads/2020/04/Business-with-the-Latest-Technology-Trends-GuglY-Tech.jpg",
            title: 'Ngân hàng đồng hành cùng doanh nghiệp, doanh nhân và người dân vượt "bão" Covid-19',
            id: 1
        },
        {
            img: "https://stawiindustries.com/wp-content/uploads/2018/09/Financing-a-Business-Purchase.jpg",
            title: "Ngân hàng dành nhiều ưu đãi cho khách hành mở và giao dịch thẻ trực tuyến",
            id: 2
        },
        {
            img: "https://innovativebusinessandlegal.com/wp-content/uploads/2018/04/Business-merger-marriage-1280x720.jpg",
            title: "Các ngân hàng liên kết tạo quỹ chống suy thoái trước tình cảnh kinh tế ảnh hưởng dịch",
            id: 3
        },
        {
            img: "https://cafesach.com.vn/wp-content/uploads/2019/09/bussiness.jpg",
            title: "Bản tin kinh tế - tình hình kinh tế quý 1 năm 2020",
            id: 4
        }
    ];

    constructor() {

    }

    getListNews() {
        return this.news;
    }

    getNewsById(id) {
        return this.news.find(n => n.id == id);
    }

}