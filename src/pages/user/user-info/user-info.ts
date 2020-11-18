import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';
import { SplashProvider } from '../../../providers/splash/splash';

/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {
  userInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public splash: SplashProvider, public api: ServiceProvider) {
  }

  ionViewWillEnter() {
    let id = this.navParams.get('id');
    
    let formdata = new FormData()
    formdata.append('user_id', id)
    this.splash.presentLoading()
    this.api.getUserDetails(formdata).subscribe(res => {
      if(res.status == "true") {
        this.splash.dismiss()
        this.userInfo = res.data;
        console.log(res);
        
      } else {
        this.splash.dismiss()
      }
    })
    console.log('ionViewDidLoad UserInfoPage');
  }

}
