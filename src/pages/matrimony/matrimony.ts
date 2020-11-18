import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { ServiceProvider } from '../../providers/service/service';
import { SplashProvider } from '../../providers/splash/splash';
import { LoginPage } from '../login/login';
import { MatrimonyDetailsPage } from '../matrimony-details/matrimony-details';

/**
 * Generated class for the MatrimonyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-matrimony',
  templateUrl: 'matrimony.html',
})
export class MatrimonyPage {
  searchQuery: string = '';
  matrimonyUsers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public splash: SplashProvider,
    public api: ServiceProvider, public global: GlobalServiceProvider, public app: App) {
    this.getMatrimonyUsers()
  }

  getMatrimonyUsers() {
    this.api.getMatrimonyUsers().subscribe(res => {
      if(res.status == "true") {
        this.matrimonyUsers = res.data;
      } else {
        //
      }
      return this.matrimonyUsers;
    })
  }

  ionViewDidLoad() {
    this.getMatrimonyUsers()
    console.log('ionViewDidLoad MatrimonyPage');
  }

  searchUser(ev: any) {
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.matrimonyUsers = this.matrimonyUsers.filter((item) => {
        return (item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.matrimonyUsers = this.getMatrimonyUsers()
    }
  }

  userDetails(id) {
    this.navCtrl.push(MatrimonyDetailsPage, {
      id: id,
    })
  }

  logout() {
    this.global.logout().subscribe(res => {
      console.log(res)
    });
    this.app.getRootNav().setRoot(LoginPage);
    }

}
