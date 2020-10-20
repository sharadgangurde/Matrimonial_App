import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarriageStep2Page } from '../../marriage-details/marriage-step2/marriage-step2';

/**
 * Generated class for the Sister5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sister5',
  templateUrl: 'sister5.html',
})
export class Sister5Page {
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
    console.log('ionViewDidLoad Sister3Page');
    this.totalSisters = this.navParams.get('sisters');
    this.totalSistersArray = this.navParams.get('sistersArray');
  }

  submitDetails(data) {
    if(this.sistersForm.valid) {
      if(this.totalSisters == 5) {
        this.navCtrl.push(MarriageStep2Page, {
          sistersArray: this.totalSistersArray
        })
      } else if(this.totalSisters > 5) {
        this.navCtrl.push(MarriageStep2Page, {
          sistersArray: this.totalSistersArray
        })
      }
    }
  }

}
