import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../../../providers/global-service/global-service';
import { ServiceProvider } from '../../../../providers/service/service';
import { SplashProvider } from '../../../../providers/splash/splash';
import { ValidationMessageProvider } from '../../../../providers/validation-message/validation-message';
import { BusinessStep1Page } from '../../../business-details/business-step1/business-step1';
import { JobDetailsPage } from '../../../job-details/job-details';
import { LoginPage } from '../../../login/login';
import { TabsPage } from '../../../tabs/tabs';

/**
 * Generated class for the EditMatrimonyStep3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-edit-matrimony-step3',
  templateUrl: 'edit-matrimony-step3.html',
})
export class EditMatrimonyStep3Page {
  marriageForm: FormGroup;
  dataArray = {};
  validation_messages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider,
    public splash: SplashProvider, public validation: ValidationMessageProvider, public global: GlobalServiceProvider) {
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
           // this.global.setUser(res.data)
          } else if(res.status == "true") {
            this.splash.dismiss()
            this.global.setUser(res.userid)
            this.splash.toast(res.message)
            let formdata = new FormData()
            formdata.append('user_id', res.userid)
            this.api.getAccountDetails(formdata).subscribe(res => {
              console.log(res)
              if(res.status == "true") {
                this.global.setUser(res.data.id);
                this.navCtrl.setRoot(TabsPage, {data: res.data})
              }
            })
          } else if(res.flag == 7) {
            this.splash.toast('Registration failed')
            this.navCtrl.setRoot(LoginPage)
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
