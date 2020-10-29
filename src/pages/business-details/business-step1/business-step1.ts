import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { BusinessStep2Page } from '../business-step2/business-step2';

/**
 * Generated class for the BusinessStep1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-business-step1',
  templateUrl: 'business-step1.html',
})
export class BusinessStep1Page {
  
  businessForm: FormGroup;
  dataArray = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.businessForm = new FormGroup({
      company: new FormControl('', [Validators.required]),
      office_address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobile1: new FormControl('', [Validators.required]),
      mobile2: new FormControl('', [Validators.required]),
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessStep1Page');
    this.dataArray = this.navParams.get('dataArray')
  }
  
  goBack() {
    this.navCtrl.pop()
  }

  submitDetails(data) {
    if(this.businessForm.valid) {
      this.dataArray['company'] = data.company,
      this.dataArray['office_address'] = data.office_address,
      this.dataArray['email'] = data.email,
      this.dataArray['mobile1'] = data.mobile1,
      this.dataArray['mobile2'] = data.mobile2,
      this.navCtrl.push(BusinessStep2Page, {dataArray: this.dataArray})
    }
    else {
      console.log('form err')
    }
  }

}
