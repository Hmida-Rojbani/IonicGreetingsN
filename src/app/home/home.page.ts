import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  personName: string;

  constructor(private toastCtrl: ToastController) {}

  async showGreetings(){
    const toast = await this.toastCtrl.create({
      message: `Hello ${this.personName} !!!`,
      duration: 5000
    });
    toast.present();
  }

}
