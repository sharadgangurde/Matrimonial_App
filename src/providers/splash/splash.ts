import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';


@Injectable()
export class SplashProvider {
  loading: any;
  constructor(public http: HttpClient, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {

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
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">
             <img src="assets/imgs/loader.gif" />
          </div>
        </div>`,
      duration: 1000
    });

    loading.onDidDismiss(() => {
    });

    loading.present();
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

}
