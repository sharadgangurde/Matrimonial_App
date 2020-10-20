import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarriageStep2Page } from '../../marriage-details/marriage-step2/marriage-step2';

/**
 * Generated class for the Brother5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brother5',
  templateUrl: 'brother5.html',
})
export class Brother5Page {
  brothersForm: FormGroup;
  totalBrothers: any;
  brothersArray = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.brothersForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Brother5Page');
    this.totalBrothers = this.navParams.get('brothers');
    this.brothersArray = this.navParams.get('brothersArray')

  }

  submitDetails(data) {
    if(this.brothersForm.valid) {
      if(this.totalBrothers == 5) {
        this.navCtrl.push(MarriageStep2Page, {
          brothersArray: this.brothersArray,
        });
      } else if(this.totalBrothers > 5) {
        this.navCtrl.push(MarriageStep2Page, {
          brothersArray: this.brothersArray
        });
      }
    }
   }

}
