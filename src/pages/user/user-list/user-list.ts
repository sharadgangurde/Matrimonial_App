import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';

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
  userlist: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: ServiceProvider) {
  /// this.userlist = this.api.getUserList();
    this.api.getUserList().subscribe(res => {
      console.log('UserListPage',res.data);
      if(res.status == "true") {
        this.userlist = res.data;
      }
    })
  }

  ionViewDidLoad() {
    console.log(' UserListPage',this.userlist);
  //  console.log('ionViewDidLoad UserListPage',JSON.parse(this.userlist.data) );
  }

}
