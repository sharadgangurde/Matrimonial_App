import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { ValidationMessageProvider } from '../../../../providers/validation-message/validation-message';
import { EditBusinessStep3Page } from '../edit-business-step3/edit-business-step3';

/**
 * Generated class for the EditBusinessStep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-edit-business-step2',
  templateUrl: 'edit-business-step2.html',
})
export class EditBusinessStep2Page {
  businessForm: FormGroup;
  dataArray = {};
  validation_messages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public validation: ValidationMessageProvider) {
    this.businessForm = new FormGroup({
      gstin: new FormControl('', [Validators.required]),
      business_type: new FormControl('', [Validators.required]),
      products: new FormControl('', [Validators.required]),
      about: new FormControl('', [Validators.required]),
      turnover: new FormControl('', [Validators.required]),
    });

    this.validation_messages = this.validation.validationMessage();
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

      this.navCtrl.push(EditBusinessStep3Page, {dataArray: this.dataArray})
    } else {
      console.log('form errr');

      Object.keys(this.businessForm.controls).forEach(field => {
        const control = this.businessForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
  }

}
