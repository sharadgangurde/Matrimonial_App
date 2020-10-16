import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MarriageStep3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marriage-step3',
  templateUrl: 'marriage-step3.html',
})
export class MarriageStep3Page {

  marriageForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.marriageForm = new FormGroup({
      gotra: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      skin: new FormControl('', [Validators.required]),
      about: new FormControl('', [Validators.required]),
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarriageStep3Page');
  }

}
