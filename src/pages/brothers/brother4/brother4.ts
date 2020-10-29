import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { MarriageStep2Page } from '../../marriage-details/marriage-step2/marriage-step2';
import { Brother5Page } from '../brother5/brother5';

/**
 * Generated class for the Brother4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-brother4',
  templateUrl: 'brother4.html',
})
export class Brother4Page {

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
    console.log('ionViewDidLoad Brother4Page');
    this.totalBrothers = this.navParams.get('brothers');
    this.brothersArray = this.navParams.get('brothersArray')
  }

  submitDetails(data) {
    if(this.brothersForm.valid) {
      
      this.brothersArray.push(data)

      console.log('---------------Brother 4--------', data);
      if(this.totalBrothers == 4) {
        this.navCtrl.push(MarriageStep2Page, {
          brothersArray: this.brothersArray,
        });
      } else if(this.totalBrothers > 4) {
        this.navCtrl.push(Brother5Page, {
          brothersArray: this.brothersArray,
          brothers: this.totalBrothers
        });
      }
    }
   }

}
