import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
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
  formdata: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider) {
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
        console.log(res)
        this.navCtrl.push(HomePage, {dataArray: this.dataArray})
      })
    }
  }
}
