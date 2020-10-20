import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Brother1Page } from '../../brothers/brother1/brother1';
import { Sister1Page } from '../../sisters/sister1/sister1';
import { MarriageStep3Page } from '../marriage-step3/marriage-step3';

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
  isChecked: any;
  marriageForm: FormGroup;
  brothers: any;
  sisters: any;
  brothersArray = [];
  sistersArray = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.marriageForm = new FormGroup({
      noOfBrothers: new FormControl('', [Validators.required]),
      noOfSisters: new FormControl('', [Validators.required]),
      manglik: new FormControl('', [Validators.required]),
      kuldevi: new FormControl('', [Validators.required]),
      gotra: new FormControl('', [Validators.required])
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarriageStep2Page');
    this.step1data = this.navParams.get('step1data')
    this.step2data = this.navParams.get('step2data')
    this.step3data = this.navParams.get('step3data')
    this.step4data = this.navParams.get('step4data')
    this.step5data = this.navParams.get('step5data')
    

    //total Brothers Arary
    this.brothersArray = this.navParams.get('brothersArray');

    //total sisters array
    this.sistersArray  = this.navParams.get('sistersArray');

    console.log('--------------------step 1----------------- ', this.step1data);
    console.log('--------------------step 2----------------- ', this.step2data);
    console.log('--------------------step 3----------------- ', this.step3data);
    console.log('--------------------step 4----------------- ', this.step4data);
    console.log('--------------------step 5----------------- ', this.step5data);
    console.log('------------------------------------------- ');
    console.log('--------------------Brothers Array----------------- ', this.brothersArray);
    console.log('--------------------Sisters Array----------------- ', this.sistersArray);

    //let formdata = new FormData()
    //formdata.append('brothers', this.brothersArray[0]);
  }

  submitDetails(data) {
    console.log('-----------data-----------', data);
    if(this.marriageForm.valid) {
      this.navCtrl.push(MarriageStep3Page, {
        step1data: this.step1data, 
        step2data: this.step2data, 
        step3data: this.step3data,
        step4data: this.step4data,
        step5data: this.step5data,
        step6data: data
      })
    }
  }

  haveBrothers(value) {
    console.log('------------have Brothers------------', value)
    if(value == 0) {
     // this.navCtrl.push(BrothersPage)
    } else if(value > 0) {
      this.navCtrl.push(Brother1Page, {data: value})
    }
  }

  haveSisters(value) {
    console.log('------------have Sisters------------', value)
    if(value == 0) {
     // this.navCtrl.push(BrothersPage)
    } else if(value > 0) {
      this.navCtrl.push(Sister1Page, {sisters: value})
    }
  }

}
