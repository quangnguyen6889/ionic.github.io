import { Component, ɵɵpipeBind2 } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-about',
    templateUrl: 'about.page.html',
    styleUrls: ['about.page.scss'],
})
export class AboutPage {
    showlit: any;
    public addNew: string = "";
    public input: boolean = false;
    public closeButton: boolean = false;
    getData: any[] = [];


    constructor() { }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter');
    }

    ionViewDidEnter() {
        console.log('ionViewDidEnter');
    }

    ionViewWillLeave() {
        console.log('ionViewWillLeave');
    }

    ionViewDidLeave() {
        console.log('ionViewDidLeave');
    }
}
