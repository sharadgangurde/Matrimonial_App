import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the BusinessInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-business-info',
  templateUrl: 'business-info.html',
})
export class BusinessInfoPage {
  userDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider) {
    let id = this.navParams.get('id')
    
    let formdata = new FormData()
    formdata.append('user_id', id)

    this.api.getUserDetails(formdata).subscribe(res => {
      if(res.status == "true") {
        this.userDetails = res.data;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessInfoPage');
  }

}
