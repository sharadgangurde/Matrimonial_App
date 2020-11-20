import { Component } from '@angular/core';
import { AlertController, App, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../../providers/global-service/global-service';
import { ServiceProvider } from '../../../providers/service/service';
import { SplashProvider } from '../../../providers/splash/splash';
import { UrlProvider } from '../../../providers/url/url';
import { LoginPage } from '../../login/login';
import { SearchPage } from '../../search/search';
import { UserInfoPage } from '../user-info/user-info';

/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
  searchQuery: string = '';
  userlist: any;
  flag: number;
  imageURL: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: ServiceProvider, public splash: SplashProvider, public global: GlobalServiceProvider,
    public app: App, public alertCtrl: AlertController, public url: UrlProvider) {
    this.getUserList();
  }
  
  getUserList() {
    this.splash.presentLoading()
    this.api.getUserList().subscribe(res => {
      console.log('UserListPage',res);
      if(res.status == "true") {
        this.splash.dismiss()
        this.userlist = res.data;
      } else {
        this.splash.dismiss()
        this.flag = 0;
      }
      return this.userlist;
    })
  }
  ionViewWillEnter() {
    
    
    console.log(' UserListPage',this.userlist);
  //  console.log('ionViewDidLoad UserListPage',JSON.parse(this.userlist.data) );
  }
  // useType 1 = AllUSers, 2 = BusinessUsers, 3 = MatrimonyUsers
  searchUser(ev: any) {
    this.navCtrl.push(SearchPage, {
      userType: 1
    })
  }

  userDetails(id) {
    this.navCtrl.push(UserInfoPage, {
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
