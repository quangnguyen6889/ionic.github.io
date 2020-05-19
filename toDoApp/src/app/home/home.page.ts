import { Component, ɵɵpipeBind2 } from "@angular/core";
import { Storage } from "@ionic/storage";
import { NavController } from "@ionic/angular";
import { NavigationExtras, Router } from "@angular/router";

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

  constructor(public navController: NavController, private router: Router) {}

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

  saveData(event) {
    this.getData.push({ name: this.addNew });
    this.addNew = "";
  }

  gotoDetail(valuevalue, vl2vl2) {
    const navigationExtras: NavigationExtras = {
      queryParams: { value: valuevalue, valuevalue: vl2vl2 },
    };
    this.router.navigate(["detail"], navigationExtras);
    // this.router.navigateByUrl(link);
  }

  gotoAbout() {
    this.router.navigate(["about"]);
  }
}
