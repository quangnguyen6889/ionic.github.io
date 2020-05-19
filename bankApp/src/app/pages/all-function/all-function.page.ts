import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-all-function',
  templateUrl: './all-function.page.html',
  styleUrls: ['./all-function.page.scss'],
})
export class AllFunctionPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async close() {
    await this.modalController.dismiss();
  }
}
