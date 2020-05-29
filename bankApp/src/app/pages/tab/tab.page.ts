import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  constructor(public navController: NavController,
    private router: Router) { }

  ngOnInit() {
  }

  gotoQR() {
    this.router.navigate(['qr'])
  }
}
