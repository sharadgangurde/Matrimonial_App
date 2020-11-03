import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { ServiceProvider } from '../../../providers/service/service';
import { ValidationMessageProvider } from '../../../providers/validation-message/validation-message';
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
  step2data: any;
  dataArray = {};
  validation_messages: any;
  calculatedAge: any
  languages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public validation: ValidationMessageProvider, public api: ServiceProvider) {
    this.signUpForm = new FormGroup({
      date_of_birth: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      religion: new FormControl('', [Validators.required]),
      caste: new FormControl('', [Validators.required])
    });

    this.validation_messages = this.validation.validationMessage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step3Page');
    this.dataArray = this.navParams.get('dataArray');
    console.log('==========Data Step2=========== ', this.dataArray)
    this.api.getLanguages().subscribe(res => {
      if(res.flag == 8) {
        this.languages = res.data;
      }
    })
  }

  public ageFromDateOfBirthday(birthdate: any): number {
    return moment().diff(birthdate, 'years');
  }

  goBack() {
    this.navCtrl.pop()
  }
  
  signUp(data) {
    if(this.signUpForm.valid) {
      //this.dataArray.push(data)
      this.dataArray['dob'] = data.date_of_birth,
      this.dataArray['age'] = data.age,
      this.dataArray['gender'] = data.gender,
      this.dataArray['religion'] = data.religion,
      this.dataArray['caste'] = data.caste,

      this.navCtrl.push(Step4Page, {dataArray: this.dataArray, language: this.languages})
    }
    else {
      console.log('form errr');

      Object.keys(this.signUpForm.controls).forEach(field => {
        const control = this.signUpForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
  }
}
