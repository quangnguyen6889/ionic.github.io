import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-history',
    templateUrl: './history.page.html',
    styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

    listItems = [
        {
            time: "Hôm nay 12h:45",
            address: "1014686229",
            amount: 100000,
            type: true,
        },

        {
            time: "Hôm nay 12h:45",
            address: "1014686229",
            amount: 100000,
            type: false,
        },

        {
            time: "23/11/2019 12h:45",
            address: "Withdrawal",
            amount: 100000000000,
            type: false,
        },

        {
            time: "20/11/2019 12h:45",
            address: "1014686229",
            amount: 500000,
            type: false,
        },

        {
            time: "20/11/2019 12h:45",
            address: "1014686229",
            amount: 800000000,
            type: true,
        },

        {
            time: "13/11/2019 12h:45",
            address: "1014686229",
            amount: 500000,
            type: false,
        },

        {
            time: "13/11/2019 12h:45",
            address: "1014686229",
            amount: 500000,
            type: false,
        },

        {
            time: "06/11/2019 12h:45",
            address: "1014686229",
            amount: 800000000,
            type: true,
        },

        {
            time: "05/11/2019 12h:45",
            address: "1014686229",
            amount: 500000,
            type: false,
        },


    ]
    constructor() { }

    ngOnInit() {
    }

}
