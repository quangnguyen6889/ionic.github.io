import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

    constructor(
        private translateService: TranslateService,
        public navController: NavController,
        private router: Router
    ) { }

    ngOnInit() {
    }

    goToLogin() {
        this.router.navigate(['log-in'])
    }

    goToHome() {
        this.router.navigate(['home'])
    }

    useEnglish() {
        this.translateService.use('en');
    }

    useVietnamese() {
        this.translateService.use('vi');
    }
}
