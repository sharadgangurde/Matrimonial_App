import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarriageStep2Page } from '../../marriage-details/marriage-step2/marriage-step2';
import { Brother3Page } from '../brother3/brother3';

/**
 * Generated class for the Brother2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brother2',
  templateUrl: 'brother2.html',
})
export class Brother2Page {
  brothersForm: FormGroup
  totalBrothers: any;
  brother1: any;
  brothersArray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.brothersForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Brother2Page');
    this.totalBrothers = this.navParams.get('brothers')
    this.brother1 = this.navParams.get('brother1')
    console.log('---------------Brother 1--------', this.brother1);
    
  }

  submitDetails(data) {
    if(this.brothersForm.valid) {

      this.brothersArray.push(this.brother1)
      this.brothersArray.push(data)

      console.log('-----------Array------------', this.brothersArray);
      if(this.totalBrothers == 2) {
        this.navCtrl.push(MarriageStep2Page, {
          brothersArray: this.brothersArray
        })
      } else if(this.totalBrothers > 2) {
        this.navCtrl.push(Brother3Page, {
          brothersArray: this.brothersArray,
          brothers: this.totalBrothers})
      }
    }
  }

}
