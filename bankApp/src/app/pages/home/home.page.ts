import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ModalController } from '@ionic/angular';
import { AllFunctionPage } from '.././all-function/all-function.page';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    name = "Đỗ Quang Nguyên";
    jsonData: any;

    constructor(
        public router: Router,
        public http: HttpClient,
        private modalController: ModalController
    ) {
        this.http.get("assets/json/image.json").subscribe((data) => {      /* Lấy dữ liệu từ file JSON */
            this.jsonData = data;
            console.log(data);
        })
    }

    ngOnInit() { }

    async allFunction() {                                                  /* Mở Modal Page */
        const modal = await this.modalController.create({
            component: AllFunctionPage
        });
        return await modal.present();
    }

    goToAllNews() {
        this.router.navigate(['all-news'])
    }
}
