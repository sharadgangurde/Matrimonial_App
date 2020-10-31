import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { SplashProvider } from '../../providers/splash/splash';
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: ServiceProvider, public splash: SplashProvider) {
    this.jobDetailsForm = new FormGroup({
      experience: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      achievements: new FormControl('', [Validators.required]),
      awards: new FormControl('', [Validators.required]),
      noticePeriod: new FormControl('', [Validators.required]),
      totalExperience: new FormControl('', [Validators.required]),
      currentSalary: new FormControl('', [Validators.required]),
      expectedSalary: new FormControl('', [Validators.required])
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobDetailsPage');
    this.dataArray = this.navParams.get('dataArray')
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
      
      this.api.registration(this.dataArray).subscribe(res => {
        if(res.flag == 0) {
          this.splash.toast(res.message)        
        } else if(res.status == "true") {
          this.splash.toast(res.message)
          this.navCtrl.push(HomePage, {dataArray: this.dataArray})
        } else if(res.flag == 7) {
          this.splash.toast('Registration failed')
        }
      })
    }
  }
}
