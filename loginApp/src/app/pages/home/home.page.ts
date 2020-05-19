import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    image = "https://businessday.ng/wp-content/uploads/2019/08/retail-banking.jpg";
    userData = null;

    constructor(
        private translateService: TranslateService,
        public navController: NavController,
        private router: Router,
        private facebook: Facebook) {

        console.log('constructor');
    }

    ngOnInit() {

        console.log('ngOnInit');

    }

    ionViewWillEnter() {

        console.log('ViewWillEnter');

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

    useEnglish() {
        this.translateService.use('en');
    }

    useVietnamese() {
        this.translateService.use('vi');
    }

    loginWithFB() {
        this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
            this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
            })
        })
    }
}
