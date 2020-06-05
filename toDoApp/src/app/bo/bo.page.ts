import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";
import { GLV } from '../global'
import { from } from 'rxjs';

@Component({
    selector: 'app-bo',
    templateUrl: './bo.page.html',
    styleUrls: ['./bo.page.scss'],
})
export class BoPage implements OnInit {

    listSanPham = [
        {
            ten: "Samsung Galaxy A51",
            // gia: 8.390000,
            // hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/220903/samsung-galaxy-a51-8gb-blue-400x460-1-400x460.png"
        },
        {
            ten: "BlackBerry KEYone",
            // gia: 6.990000,
            // hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/112433/blackberry-keyone-1-400x460.png"
        },
        {
            ten: "iPhone SE 2020",
            // gia: 12.990000,
            // hinhAnh: "https://cdn.tgdd.vn/2020/05/campaign/do-534x635.png"
        }
    ];

    text: string = "";

    constructor(private router: Router, private gLV: GLV) { }

    ngOnInit() {
    }

    sangTrangCon(sanPham) {
        this.gLV.va = sanPham;
        const navigationExtras: NavigationExtras = {
            queryParams: { key: sanPham },
        };
        this.router.navigate(["con"], navigationExtras);
    }
}
