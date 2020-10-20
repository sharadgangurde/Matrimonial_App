import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarriageStep2Page } from '../../marriage-details/marriage-step2/marriage-step2';
import { Sister3Page } from '../sister3/sister3';

/**
 * Generated class for the Sister2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sister2',
  templateUrl: 'sister2.html',
})
export class Sister2Page {
  sistersForm: FormGroup;
  totalSisters: any;
  sister1: any;
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
    console.log('ionViewDidLoad Sister2Page');
    this.totalSisters = this.navParams.get('sisters');
    this.sister1 = this.navParams.get('sister1');
  }

  submitDetails(data) {
    if(this.sistersForm.valid) {

      this.totalSistersArray.push(this.sister1);
      this.totalSistersArray.push(data)

      if(this.totalSisters == 2) {
        this.navCtrl.push(MarriageStep2Page, {
          sistersArray: this.totalSistersArray
        })
      } else if(this.totalSisters > 2) {
        this.navCtrl.push(Sister3Page, {
          sisters: this.totalSisters,
          sistersArray: this.totalSistersArray
        })
      }
    }
  }

}
