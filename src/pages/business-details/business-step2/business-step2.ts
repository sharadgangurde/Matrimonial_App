import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusinessStep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business-step2',
  templateUrl: 'business-step2.html',
})
export class BusinessStep2Page {
  businessForm: FormGroup;

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
  }

}
