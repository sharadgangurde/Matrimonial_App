import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MarriageStep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marriage-step2',
  templateUrl: 'marriage-step2.html',
})
export class MarriageStep2Page {

  step1data: any;
  step2data: any;
  step3data: any;
  step4data: any;
  step5data: any;

  marriageForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.marriageForm = new FormGroup({
      motheroccupation: new FormControl('', [Validators.required]),
      brothers: new FormControl('', [Validators.required]),
      sisters: new FormControl('', [Validators.required]),
      manglik: new FormControl('', [Validators.required]),
      kuldevi: new FormControl('', [Validators.required]),
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarriageStep2Page');
    this.step1data = this.navParams.get('step1data')
    this.step2data = this.navParams.get('step2data')
    this.step3data = this.navParams.get('step3data')
    this.step4data = this.navParams.get('step4data')
    this.step5data = this.navParams.get('step5data')
    console.log('--------------------step 1----------------- ', this.step1data);
    console.log('--------------------step 2----------------- ', this.step2data);
    console.log('--------------------step 3----------------- ', this.step3data);
    console.log('--------------------step 4----------------- ', this.step4data);
    console.log('--------------------step 5----------------- ', this.step5data);
    
  }

  submitDetails(data) {
    console.log('-----------data-----------', data);
  }

}
