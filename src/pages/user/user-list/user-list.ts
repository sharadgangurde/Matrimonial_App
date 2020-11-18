import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';
import { SplashProvider } from '../../../providers/splash/splash';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: ServiceProvider, public splash: SplashProvider) {
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

  searchUser(ev: any) {
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.userlist = this.userlist.filter((item) => {
        return (item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.userlist = this.getUserList()
    }
  }

  userDetails(id) {
    this.navCtrl.push(UserInfoPage, {
      id: id
    })
  }

}
