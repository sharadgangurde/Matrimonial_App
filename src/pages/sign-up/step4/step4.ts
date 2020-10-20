import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';
import { ValidationMessageProvider } from '../../../providers/validation-message/validation-message';
import { DivorcedStep1Page } from '../../divorse-details/divorced-step1/divorced-step1';
import { MarriageStep1Page } from '../../marriage-details/marriage-step1/marriage-step1';

/**
 * Generated class for the Step4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step4',
  templateUrl: 'step4.html',
})
export class Step4Page {

  signUpForm: FormGroup;
  step3data: any;
  step2data: any;
  step1data: any;
  languages: any = ['Hindi', 'English'];
  validation_messages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider,
    public alertCtrl: AlertController, public validation: ValidationMessageProvider) {
    this.signUpForm = new FormGroup({
      selectedLang: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      annual_income: new FormControl('', [Validators.required]),
      hobbies: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      profession: new FormControl('', [Validators.required])
    });
    this.validation_messages = this.validation.validationMessage();
    console.log(this.validation_messages)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Step4Page');
    this.step3data = this.navParams.get('step3data'),
    this.step2data = this.navParams.get('step2data'),
    this.step1data = this.navParams.get('step1data')
    // this.languages = this.lang.languages();
    
    console.log('----------Page1----------',this.step1data)
    console.log('----------Page2----------',this.step2data)
    console.log('----------Page3----------',this.step3data)
  }

  public signUp(data) {
    if(this.signUpForm.value) {
      // let formdata = new FormData();
      // formdata.append('email', data.email);
    
      // this.api.generateOtp(formdata).subscribe(res => {
      //   console.log(res)
      //   if (res.flag == 3) {
      //    // this.splash.toast(res.data);
      //    this.navCtrl.push(MarriageStep1Page, {data: data, otp: res.otp});
      //   }
      // });
      if(data.marital_status == 'Unmarried') {
        this.navCtrl.push(MarriageStep1Page, {
          step1data: this.step1data, step2data: this.step2data, step3data: this.step3data, step4data: data
        })
      } else if(data.marital_status == 'Married') {
        console.log('----------------Married--------------')
      } else if(data.marital_status == 'Divorced/Widowed') {
        this.navCtrl.push(DivorcedStep1Page, {
          step1data: this.step1data, step2data: this.step2data, step3data: this.step3data, step4data: data
        })
      }
    } else {
      console.log('form errr');

      Object.keys(this.signUpForm.controls).forEach(field => {
        const control = this.signUpForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    }
  }

}
