import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusinessStep1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business-step1',
  templateUrl: 'business-step1.html',
})
export class BusinessStep1Page {
  
  businessForm: FormGroup;

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
  }

  submitDetails(data) {
    
  }

}
