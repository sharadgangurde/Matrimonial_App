import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { MarriageStep2Page } from '../../marriage-details/marriage-step2/marriage-step2';
import { Brother4Page } from '../brother4/brother4';

/**
 * Generated class for the Brother3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-brother3',
  templateUrl: 'brother3.html',
})
export class Brother3Page {
  brothersForm: FormGroup;
  totalBrothers: any;
  brother1: any;
  brothersArray = [];
  brother2: any;
  
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
    console.log('ionViewDidLoad Brother3Page');
    this.totalBrothers = this.navParams.get('brothers');
    this.brothersArray = this.navParams.get('brothersArray');
    console.log('---------------BROTHERS ARRAY--------', this.brothersArray);
  }
  submitDetails(data) {
    if(this.brothersForm.valid) {
      this.brothersArray.push(data)
      if(this.totalBrothers == 3) {
        this.navCtrl.push(MarriageStep2Page, {
          brothersArray: this.brothersArray
        });
      } else if(this.totalBrothers > 3) {
        this.navCtrl.push(Brother4Page, {
          brothersArray: this.brothersArray,
          brothers: this.totalBrothers
        });
      }
    }
   }

}
