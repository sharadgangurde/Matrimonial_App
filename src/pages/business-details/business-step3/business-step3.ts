import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusinessStep3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business-step3',
  templateUrl: 'business-step3.html',
})
export class BusinessStep3Page {
  businessForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.businessForm = new FormGroup({
      website: new FormControl('', [Validators.required]),
      linkedin: new FormControl('', [Validators.required]),
      facebook: new FormControl('', [Validators.required]),
      instagram: new FormControl('', [Validators.required])
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessStep3Page');
  }

}
