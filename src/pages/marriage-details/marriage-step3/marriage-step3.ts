import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.marriageForm = new FormGroup({
      height: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      skin: new FormControl('', [Validators.required]),
      about: new FormControl('', [Validators.required]),
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarriageStep3Page');
    this.dataArray = this.navParams.get('dataArray');
    console.log('--------------data at marriage step3----------- ', this.dataArray)
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
      } else {
        this.navCtrl.push(HomePage)
      }    
      
    }
  }

}
