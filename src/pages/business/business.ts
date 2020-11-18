import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { BusinessInfoPage } from '../business-info/business-info';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider) {
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

}
