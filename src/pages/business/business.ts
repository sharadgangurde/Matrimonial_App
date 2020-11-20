import { Component } from '@angular/core';
import { AlertController, App, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { ServiceProvider } from '../../providers/service/service';
import { SplashProvider } from '../../providers/splash/splash';
import { UrlProvider } from '../../providers/url/url';
import { BusinessInfoPage } from '../business-info/business-info';
import { EditBusinessStep1Page } from '../edit-profile/edit-business-profile/edit-business-step1/edit-business-step1';
import { LoginPage } from '../login/login';
import { SearchPage } from '../search/search';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {
  businessUsers: any;
  user_id: string;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider,
    public global: GlobalServiceProvider, public splash: SplashProvider, public app: App,
    public alertCtrl: AlertController, public url: UrlProvider) {
    this.getBusinessUsers()
  }

  getBusinessUsers() {
    this.api.getBusinessUsers().subscribe(res => {
      if(res.status == "true") {
        this.businessUsers = res.data;
      } else {
        //
      }
      return this.businessUsers;
    })
  }

  ionViewDidLoad() {
    this.getBusinessUsers()
    console.log('ionViewDidLoad BusinessPage');
  }
  ionViewWillEnter(){
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
    }

  }
  gotoProfile() {
    this.app.getRootNav().setRoot(EditBusinessStep1Page);
   /* this.app.getRootNav().setRoot(LoginPage);
    this.navCtrl.push(EditMatrimonyStep1Page, {
      user_id: this.user_id
    })*/
  }
  searchUser(ev: any) {
    this.navCtrl.push(SearchPage, {
      userType: 2
    })
  }

  userDetails(id) {
    this.navCtrl.push(BusinessInfoPage, {
      id: id
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
