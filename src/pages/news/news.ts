import { Component } from '@angular/core';
import { AlertController, App, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { ServiceProvider } from '../../providers/service/service';
import { LoginPage } from '../login/login';
import { NewsDetailsPage } from '../news-details/news-details';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  news: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider,
    public global: GlobalServiceProvider, public app: App,
    public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.api.getNews().subscribe(res => {
      if(res.status == "true") {
        this.news = res.data;
      } else {
        //
      }
    })
    console.log('ionViewDidLoad NewsPage');
  }

  gotoDetails(item) {
    this.navCtrl.push(NewsDetailsPage, {
      news: item,
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
