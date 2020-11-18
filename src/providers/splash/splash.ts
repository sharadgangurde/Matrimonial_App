import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, PopoverController, ToastController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';


@Injectable()
export class SplashProvider {
  loading: any;
  constructor(public http: HttpClient, private toastCtrl: ToastController, public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController) {

  }
  toast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  presentLoading() {
    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">
            <img src="assets/imgs/loader.gif" />
          </div>
        </div>`,
      //duration: 1000
    });

    this.loading.onDidDismiss(() => {
    });

    this.loading.present();
  }

  dismiss() {
    this.loading.dismiss();
  }
  loadingShow() {
    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">
             <img src="assets/imgs/loader.gif" />
          </div>
        </div>`,
        duration: 30000
    });
    this.loading.present();
  }

  presentPopover() {
    const popover = this.popoverCtrl.create(PopoverPage);
    popover.present();
  }

}
