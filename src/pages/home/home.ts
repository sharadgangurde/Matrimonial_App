import { Component } from '@angular/core';
import { AlertController, App, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { ServiceProvider } from '../../providers/service/service';
import { SplashProvider } from '../../providers/splash/splash';
import { LoginPage } from '../login/login';
import { NewsDetailsPage } from '../news-details/news-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user_id: any;
  news: any;
  user: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,  public splash: SplashProvider,
    public app:App, public api: ServiceProvider, public global: GlobalServiceProvider,
    public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    if (window.localStorage.getItem('id')) {
      this.user_id = window.localStorage.getItem('id');

      let formdata = new FormData();
      formdata.append('user_id', this.user_id)
      this.api.getUserDetails(formdata).subscribe(res => {
        if(res.status == "true") {
          this.user = res.data
          console.log('login user', this.user);
          
        } else {
          this.splash.toast('Unable to load your information')
        }
      })
      //get news
      this.api.getNews().subscribe(res => {
        if(res.status == "true") {
          this.news = res.data;
        }
      })
    }
  }

  openPopover() {
    this.splash.presentPopover()
  }

  newsDetails(news) {
    this.navCtrl.push(NewsDetailsPage, {
      news: news
    })
  }

  public logoutAlert() {
    let alert = this.alertCtrl.create({
      message: 'Do you want logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            alert.dismiss()
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.global.logout().subscribe(res => {
              console.log(res);
              
            });
            this.app.getRootNav().setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }

}
