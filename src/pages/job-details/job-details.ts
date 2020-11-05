import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { ServiceProvider } from '../../providers/service/service';
import { SplashProvider } from '../../providers/splash/splash';
import { ValidationMessageProvider } from '../../providers/validation-message/validation-message';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the JobDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-job-details',
  templateUrl: 'job-details.html',
})
export class JobDetailsPage {

  jobDetailsForm: FormGroup;
  dataArray = {};
  validation_messages: this;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: ServiceProvider, public splash: SplashProvider, public validation: ValidationMessageProvider,
    public global: GlobalServiceProvider) {
    this.jobDetailsForm = new FormGroup({
      experience: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      achievements: new FormControl('', [Validators.required]),
      awards: new FormControl('', [Validators.required]),
      noticePeriod: new FormControl('', [Validators.required]),
      totalExperience: new FormControl('', [Validators.required]),
      currentSalary: new FormControl('', [Validators.required]),
      expectedSalary: new FormControl('', [Validators.required])
    });

    this.validation_messages = this.validation.validationMessage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobDetailsPage');
    this.dataArray = this.navParams.get('dataArray')
  }

  goBack() {
    this.navCtrl.pop()
  }

  submitDetails(data) {
    if(this.jobDetailsForm.valid) {
      this.dataArray['experience'] = data.experience,
      this.dataArray['company'] = data.company,
      this.dataArray['achievements'] = data.achievements,
      this.dataArray['noticePeriod'] = data.noticePeriod,
      this.dataArray['totalExperience'] = data.totalExperience,
      this.dataArray['currentSalary'] = data.currentSalary,
      this.dataArray['expectedSalary'] = data.expectedSalary,
      this.dataArray['awards'] = data.awards;
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
    } else {
      console.log('form errr');

      Object.keys(this.jobDetailsForm.controls).forEach(field => {
        const control = this.jobDetailsForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
  }
}
