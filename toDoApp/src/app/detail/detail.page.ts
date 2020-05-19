import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
    valuevalue: any;
    constructor(private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {

        this.activatedRoute.queryParams.subscribe(param => {
            if (param) {
                this.valuevalue = param.value;

                debugger
            }
        });
    }




}
