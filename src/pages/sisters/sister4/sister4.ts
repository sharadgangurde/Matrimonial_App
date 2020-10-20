import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarriageStep2Page } from '../../marriage-details/marriage-step2/marriage-step2';
import { Sister5Page } from '../sister5/sister5';

/**
 * Generated class for the Sister4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sister4',
  templateUrl: 'sister4.html',
})
export class Sister4Page {
  sistersForm: FormGroup;
  totalSisters: any;
  totalSistersArray = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sistersForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sister4Page');
    this.totalSisters = this.navParams.get('sisters');
    this.totalSistersArray = this.navParams.get('sistersArray');
  }

  submitDetails(data) {
    if(this.sistersForm.valid) {

      this.totalSistersArray.push(data)

      if(this.totalSisters == 4) {
        this.navCtrl.push(MarriageStep2Page, {
          sistersArray: this.totalSistersArray
        })
      } else if(this.totalSisters > 4) {
        this.navCtrl.push(Sister5Page, {
          sistersArray: this.totalSistersArray,
          sisters: this.totalSisters
        })
      }
    }
  }

}
