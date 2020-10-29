import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { MarriageStep2Page } from '../../marriage-details/marriage-step2/marriage-step2';
import { Sister2Page } from '../sister2/sister2';

/**
 * Generated class for the Sister1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-sister1',
  templateUrl: 'sister1.html',
})
export class Sister1Page {
  sistersForm: FormGroup;
  totalSisters: any;

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
    console.log('ionViewDidLoad Sister1Page');
    this.totalSisters = this.navParams.get('sisters')

  }

  submitDetails(data) {
    if(this.sistersForm.valid) {
      if(this.totalSisters == 1) {
        this.navCtrl.push(MarriageStep2Page, {
          sistersArray: data
        })
      } else if(this.totalSisters > 1) {
        this.navCtrl.push(Sister2Page, {sisters: this.totalSisters, sister1: data})
      }
    }
  }

}
