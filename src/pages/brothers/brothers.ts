import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarriageStep2Page } from '../marriage-details/marriage-step2/marriage-step2';

/**
 * Generated class for the BrothersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brothers',
  templateUrl: 'brothers.html',
})
export class BrothersPage {

  totalBrothers = [];
  brothersForm: FormGroup;
  brotherDetailsForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.brothersForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
    });

    this.brotherDetailsForm = new FormGroup({
      noofbrothers: new FormControl('', [Validators.required])
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrothersPage');
  }

  selectedNumber(value) {
    console.log('-----------No of brothers are ', value)
    for(let i = 1; i <= value; i++) {
      this.totalBrothers.push({
        value: i
      })     
    }
    console.log('-----------Brothers Array------------ ', this.totalBrothers);
  }

  submitDetails(data) {
    console.log('----------------- Brothers --------------', data);
    this.navCtrl.push(MarriageStep2Page)
  }
}
