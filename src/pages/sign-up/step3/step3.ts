import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { Step4Page } from '../step4/step4';

/**
 * Generated class for the Step3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-step3',
  templateUrl: 'step3.html',
})
export class Step3Page {

  signUpForm: FormGroup;
  step1data: any;
  step2data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.signUpForm = new FormGroup({
      date_of_birth: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      religion: new FormControl('', [Validators.required]),
      caste: new FormControl('', [Validators.required])
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step3Page');
    this.step1data = this.navParams.get('step1data');
    this.step2data = this.navParams.get('step2data');
    //let formdata = new FormData()
    console.log('==========Data Step1=========== ', this.step1data)
    console.log('==========Data Step2=========== ', this.step2data)
  }

  signUp(data) {
    if(this.signUpForm.valid) {
      this.navCtrl.push(Step4Page, {step3data: data, step2data: this.step2data, step1data: this.step1data})
    }
    else {
      console.log('form errr');

      Object.keys(this.signUpForm.controls).forEach(field => {
        const control = this.signUpForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    }
  }
}
