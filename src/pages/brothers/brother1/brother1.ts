import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { MarriageStep2Page } from '../../marriage-details/marriage-step2/marriage-step2';
import { Brother2Page } from '../brother2/brother2';

/**
 * Generated class for the Brother1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-brother1',
  templateUrl: 'brother1.html',
})
export class Brother1Page {
  totalBrothers: any;
  brothersForm: any;
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
    console.log('ionViewDidLoad Brother1Page');
    this.totalBrothers = this.navParams.get('data');
  }

  submitDetails(data) {
    if(this.brothersForm.valid) {
      if(this.totalBrothers == 1) {
        this.navCtrl.push(MarriageStep2Page, {
          brothersArray: data
        })
      } else if(this.totalBrothers > 1) {
        this.navCtrl.push(Brother2Page, {brothers: this.totalBrothers, brother1: data})
      }
    }
  }
  

}
