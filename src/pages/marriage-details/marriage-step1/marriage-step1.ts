import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarriageStep2Page } from '../marriage-step2/marriage-step2';

/**
 * Generated class for the MarriageStep1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marriage-step1',
  templateUrl: 'marriage-step1.html',
})
export class MarriageStep1Page {

  step1data: any;
  step2data: any;
  step3data: any;
  step4data: any;
  marriageForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.marriageForm = new FormGroup({
      profilepic: new FormControl('', [Validators.required]),
      otherpics: new FormControl('', [Validators.required]),
      mothername: new FormControl('', [Validators.required]),
      fathermobileno: new FormControl('', [Validators.required]),
      fatheroccupation: new FormControl('', [Validators.required]),
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarriageStep1Page');
    this.step1data = this.navParams.get('step1data');
    this.step2data = this.navParams.get('step2data');
    this.step3data = this.navParams.get('step3data');
    this.step4data = this.navParams.get('step4data');
    console.log('---------------Step 1----------------- ',this.step1data)
    console.log('---------------Step 2----------------- ',this.step2data)
    console.log('---------------Step 3----------------- ',this.step3data)
    console.log('---------------Step 4----------------- ',this.step4data)
  }

  submitDetails(data) {
    if(this.marriageForm.valid) {
      this.navCtrl.push(MarriageStep2Page, {
        step1data: this.step1data, 
        step2data: this.step2data, 
        step3data: this.step3data, 
        step4data: this.step4data,
        step5data: data
      })
    }
  }
}
