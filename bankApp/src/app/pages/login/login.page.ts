import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    image = "https://visabaongoc.com/wp-content/uploads/2017/12/vs-1.png"

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToHome() {
        // Sửa lỗi Cannot match any routes: 
        // Thêm dấu / vào trước tên trang mà mình muốn chuyển đến.
        // Ví dụ: this.router.navigate(['/tab'])
        this.router.navigate(['/tab'])
    }
}
