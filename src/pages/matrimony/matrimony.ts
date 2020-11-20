import { Component } from '@angular/core';
import { AlertController, App, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { ServiceProvider } from '../../providers/service/service';
import { SplashProvider } from '../../providers/splash/splash';
import { UrlProvider } from '../../providers/url/url';
import { EditMatrimonyStep1Page } from '../edit-profile/edit-matrimony-profile/edit-matrimony-step1/edit-matrimony-step1';
import { LoginPage } from '../login/login';
import { MatrimonyDetailsPage } from '../matrimony-details/matrimony-details';
import { SearchPage } from '../search/search';

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
  user_id: any;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public splash: SplashProvider,
    public api: ServiceProvider, public global: GlobalServiceProvider, public app: App,
    public alertCtrl: AlertController, public url: UrlProvider) {
    this.getMatrimonyUsers()
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
    if(this.user.marital_status= "Unmarried"){
      this.app.getRootNav().push(EditMatrimonyStep1Page);
    }else if(this.user.marital_status= "Divorced"){
      this.app.getRootNav().push(EditMatrimonyStep1Page);
    }else{
      this.user.marital_status = undefined;
    }
    
   /* this.app.getRootNav().setRoot(LoginPage);
    this.navCtrl.push(EditMatrimonyStep1Page, {
      user_id: this.user_id
    })*/
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

  searchUser(ev) {
    this.navCtrl.push(SearchPage, {
      userType: 3
    })
  }

  userDetails(id) {
    this.navCtrl.push(MatrimonyDetailsPage, {
      id: id,
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
