import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { BusinessStep3Page } from '../business-step3/business-step3';

/**
 * Generated class for the BusinessStep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-business-step2',
  templateUrl: 'business-step2.html',
})
export class BusinessStep2Page {
  businessForm: FormGroup;
  dataArray = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.businessForm = new FormGroup({
      gstin: new FormControl('', [Validators.required]),
      business_type: new FormControl('', [Validators.required]),
      products: new FormControl('', [Validators.required]),
      about: new FormControl('', [Validators.required]),
      turnover: new FormControl('', [Validators.required]),
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessStep2Page');
    this.dataArray = this.navParams.get('dataArray');
  }

  goBack() {
    this.navCtrl.pop()
  }

  submitDetails(data) {
    if(this.businessForm.valid) {
      this.dataArray['gstin'] = data.gstin,
      this.dataArray['business_type'] = data.business_type,
      this.dataArray['products'] = data.products,
      this.dataArray['about'] = data.about,
      this.dataArray['turnover'] = data.turnover,

      this.navCtrl.push(BusinessStep3Page, {dataArray: this.dataArray})
    } else {
      console.log('-------- form err -------');
      
    }
  }

}
