import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the MatrimonyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-matrimony-details',
  templateUrl: 'matrimony-details.html',
})
export class MatrimonyDetailsPage {
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
    console.log('ionViewDidLoad MatrimonyDetailsPage');
  }

}
