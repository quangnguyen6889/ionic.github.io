import { Component, ɵɵpipeBind2 } from "@angular/core";
import { Storage } from "@ionic/storage";
import { NavController } from "@ionic/angular";
import { NavigationExtras, Router } from "@angular/router";
import { ApiService } from './../api.service';

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
})
export class HomePage {
    public addNew: string = "";
    public input: boolean = false;
    public closeButton: boolean = false;
    public getData: any[] = [];
    dataUser: any;

    constructor(
        public api: ApiService,
        public navController: NavController,
        private router: Router
    ) { }

    ngOnInit() {
        this.getDataUser();
    }

    async getDataUser() {
        await this.api.getDataUser().subscribe(res => {
            console.log(res);
            this.dataUser = res.results;
            console.log(this.dataUser);
        }, err => {
            console.log(err);
        });
    }

    showInput() {
        if (!this.input) {
            this.input = true;
        }
    }

    hideInput() {
        if (this.input) {
            this.input = false;
        }
    }

    showCloseButton() {
        if (!this.closeButton) {
            this.closeButton = true;
        }
    }

    saveData() {
        this.getData.push({ name: this.addNew });
        this.addNew = "";
    }

    gotoDetail(value) {
        const navigationExtras: NavigationExtras = {
            queryParams: { key: value },
        };
        this.router.navigate(["detail"], navigationExtras);
        // this.router.navigateByUrl(link);
    }

    gotoAbout() {
        this.router.navigate(["about"]);
    }
}
