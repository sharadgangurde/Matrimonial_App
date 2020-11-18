import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { ServiceProvider } from '../../providers/service/service';
import { SplashProvider } from '../../providers/splash/splash';
import { BusinessInfoPage } from '../business-info/business-info';
import { LoginPage } from '../login/login';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider,
    public global: GlobalServiceProvider, public splash: SplashProvider, public app: App) {
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

  searchUser(ev: any) {
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.businessUsers = this.businessUsers.filter((item) => {
        return (item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.businessUsers = this.getBusinessUsers()
    }
  }

  userDetails(id) {
    this.navCtrl.push(BusinessInfoPage, {
      id: id
    })
  }

  logout() {
    this.splash.presentLoading()
    this.global.logout().subscribe(res => {
      console.log(res)
      this.splash.dismiss()
    });
    this.app.getRootNav().setRoot(LoginPage);
    }

}
