import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Searchbar } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { UserInfoPage } from '../user/user-info/user-info';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  userList: any;
  @ViewChild('searchbar') searchbar:Searchbar;
  allUser: any;
  userType: any;
  searchedUsers: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider) {
    
  }

  ionViewWillEnter() {
    this.userType = this.navParams.get('userType');
    console.log(this.userType);
    if(this.userType == 1){
      this.api.getUserList().subscribe(res => {
        if(res.status == "true") {
          this.userList = res.data
          console.log('Search Result ',this.userList);
          
        }
      })
    } else if(this.userType == 2){
      this.api.getBusinessUsers().subscribe(res => {
        if(res.status == "true") {
          this.userList = res.data
          console.log('Search Result ',this.userList);
        }
      })
    } else if(this.userType == 3){
      this.api.getMatrimonyUsers().subscribe(res => {
        if(res.status == "true") {
          this.userList = res.data
          console.log('Search Result ',this.userList);
        }
      })
    }
    setTimeout(() => {
      this.searchbar.setFocus();
    }, 600);
    console.log('ionViewDidLoad SearchPage');
  }

  searchUser(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() != '') {
      if(this.userList) {
        this.searchedUsers = this.userList.filter((item) => {
          return (item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
          item.lastname.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    } else {
      this.searchedUsers = undefined
    }
  }

  userDetails(id) {
    this.navCtrl.push(UserInfoPage, {
      id: id
    })
  }

  goBack() {
    this.navCtrl.pop()
  }

}
