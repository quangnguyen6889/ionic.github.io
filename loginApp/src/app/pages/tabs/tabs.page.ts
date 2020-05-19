import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

    constructor(
        public navController: NavController,
        private router: Router
    ) { }

    ngOnInit() {
    }

    logInNew() {
        debugger
        this.router.navigate(['log-in-new'])
    }

}
