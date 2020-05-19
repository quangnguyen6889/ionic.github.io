// import { Component, ViewChild } from "@angular/core";
// import { Router } from "@angular/router";
// import { IonSlides } from "@ionic/angular";

// @Component({
//   selector: "app-introduce",
//   templateUrl: "introduce.page.html",
//   styleUrls: ["introduce.page.scss"],
// })
// export class IntroducePage {
//   domReference = document.getElementById("someElement");

//   selectedSlide: any;
//   buttonBTN = "NEXT";
//   slideOpts = {
//     initialSlide: 1,
//     speed: 400,
//   };

//   constructor(private router: Router) { }

//   next() {
//     debugger;
//     this.selectedSlide.getActiveIndex().then((indexSlide) => {
//       debugger;
//       if (indexSlide == 3) {
//         this.buttonBTN = "Finish";
//       } else {
//         this.selectedSlide.slideNext();
//       }
//     });
//   }

//   goToLogin() {
//     this.router.navigate(["login"]);
//   }

//   ionSlideChange(sl) {
//     debugger
//     this.selectedSlide = sl;
//     sl.getActiveIndex().then((indexSlide) => {
//       if (indexSlide == 3) {
//         this.buttonBTN = "Finish";
//       }
//     });
//   }
// }


import { Component, ViewChild } from '@angular/core';
import { IonSlides } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
    selector: "app-introduce",
    templateUrl: "introduce.page.html",
    styleUrls: ["introduce.page.scss"],
})

export class IntroducePage {
    @ViewChild('slides', { static: true }) slider: IonSlides;
    slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    constructor(private router: Router) { }

    next() {
        this.slider.slideNext();
    }

    // slidePrev() {
    //   this.slider.slidePrev();
    // }
    // // Get selected slide index
    // async slideDidChange(event) {
    //   const i = await this.slider.getActiveIndex()
    // }

    goToLogin() {
        this.router.navigate(["login"]);
    }

}