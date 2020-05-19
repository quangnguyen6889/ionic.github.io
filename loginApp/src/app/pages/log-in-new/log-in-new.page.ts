import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Component({
    selector: 'app-log-in',
    templateUrl: './log-in-new.page.html',
    styleUrls: ['./log-in-new.page.scss'],
})
export class LogInNewPage implements OnInit {

    language = "vietnamese";
    username = "";
    password = "";
    admin = "admin";

    constructor(
        private translateService: TranslateService,
        public navController: NavController,
        private router: Router,
        public fb: Facebook
    ) { }

    ngOnInit() {

    }

    // ionViewDidEnter() {
    //     debugger
    // }
    // ionViewWillLeave() {
    //     debugger
    // }

    // ionViewWillEnter() {
    //     debugger
    // }

    // ionViewDidLeave() {
    //     debugger
    // }

    goToHome() {
        debugger
        console.log(this.language);
        // Username
        if (this.username.length == 0 && this.language == "vietnamese") {
            document.getElementById('emailHelp').innerHTML = "Vui lòng nhập tên tài khoản";
        } else if (this.username !== this.admin && this.language == "vietnamese") {
            document.getElementById('emailHelp').innerHTML = "Tên tài khoản không đúng";
        } else if (this.username === this.admin) {
            document.getElementById('emailHelp').innerHTML = "";
        }

        if (this.username.length == 0 && this.language == "english") {
            document.getElementById('emailHelp').innerHTML = "Please enter username";
        } else if (this.username !== this.admin && this.language == "english") {
            document.getElementById('emailHelp').innerHTML = "The username is incorrect";
        } else if (this.username === this.admin) {
            document.getElementById('emailHelp').innerHTML = "";
        }
        // Username

        // Password
        if (this.password.length == 0 && this.language == "vietnamese") {
            document.getElementById('passwordHelp').innerHTML = "Vui lòng nhập mật khẩu";
        } else if (this.password !== this.admin && this.language == "vietnamese") {
            document.getElementById('passwordHelp').innerHTML = "Mật khẩu không đúng";
        } else if (this.password === this.admin) {
            document.getElementById('passwordHelp').innerHTML = "";
        }
        if (this.password.length == 0 && this.language == "english") {
            document.getElementById('passwordHelp').innerHTML = "Please enter password";
        } else if (this.password !== this.admin && this.language == "english") {
            document.getElementById('passwordHelp').innerHTML = "Password is incorrect";
        } else if (this.password === this.admin) {
            document.getElementById('passwordHelp').innerHTML = "";
        }
        // Password


        if (this.username === this.admin && this.password === this.admin) {
            this.router.navigate(['tabs/home']);
        }
        // this.router.navigate(['home']);
        // console.log(this.username.length);
        // console.log(this.password.length);
    }

    goToSignUp() {
        debugger
        this.router.navigate(['sign-up'])
    }

    useLanguage(value) {
        if (value == "english") {
            this.translateService.use('en');
        } else {
            this.translateService.use('vi');
        }
    }

    // CÁCH 2
    // useVietnamese() {
    //     this.translateService.use('vi');
    // }

    // useEnglish() {
    //     this.translateService.use('en');
    // }

    logInWithFB() {
        debugger
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then((res: FacebookLoginResponse) =>
                //   console.log('Logged into Facebook!', res)
                alert(JSON.stringify(res))
            )
            .catch(e => console.log('Error logging into Facebook', e));
    }
}
