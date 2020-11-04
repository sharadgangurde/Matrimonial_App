import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';
import { SplashProvider } from '../../../providers/splash/splash';
import { ValidationMessageProvider } from '../../../providers/validation-message/validation-message';
import { BusinessStep1Page } from '../../business-details/business-step1/business-step1';
import { HomePage } from '../../home/home';
import { JobDetailsPage } from '../../job-details/job-details';

/**
 * Generated class for the MarriageStep3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-marriage-step3',
  templateUrl: 'marriage-step3.html',
})
export class MarriageStep3Page {

  marriageForm: FormGroup;
  dataArray = {};
  validation_messages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider,
    public splash: SplashProvider, public validation: ValidationMessageProvider) {
    this.marriageForm = new FormGroup({
      height: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      skin: new FormControl('', [Validators.required]),
      about: new FormControl('', [Validators.required]),
    });

    this.validation_messages = this.validation.validationMessage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarriageStep3Page');
    this.dataArray = this.navParams.get('dataArray');
    console.log('--------------data at marriage step3----------- ', this.dataArray)
  }

  goBack() {
    this.navCtrl.pop()
  }
  
  submitDetails(data) {
    if(this.marriageForm.valid) {

      this.dataArray['height'] = data.height,
      this.dataArray['weight'] = data.weight,
      this.dataArray['skin'] = data.skin,
      this.dataArray['about'] = data.about;
      
      if(this.dataArray['profession'] == 'Job') {
        this.navCtrl.push(JobDetailsPage, {dataArray: this.dataArray})
      } else if(this.dataArray['profession'] == 'Business') {
        this.navCtrl.push(BusinessStep1Page, {dataArray: this.dataArray})
      } else if(this.dataArray['profession'] == 'Unemployed'){
        this.splash.presentLoading()
        this.api.registration(this.dataArray).subscribe(res => {
          if(res.flag == 0) {
            this.splash.toast(res.message)
          } else if(res.status == "true") {
            this.splash.dismiss()
            this.splash.toast(res.message)
            this.navCtrl.push(HomePage, {dataArray: this.dataArray})
          } else if(res.flag == 7) {
            this.splash.toast('Registration failed')
          }
        })
      }    
      
    } else {
      console.log('form errr');

      Object.keys(this.marriageForm.controls).forEach(field => {
        const control = this.marriageForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
  }

}
