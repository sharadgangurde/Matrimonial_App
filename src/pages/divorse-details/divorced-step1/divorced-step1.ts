import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { DivorcedStep2Page } from '../divorced-step2/divorced-step2';

/**
 * Generated class for the DivorcedStep1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-divorced-step1',
  templateUrl: 'divorced-step1.html',
})
export class DivorcedStep1Page {

  divorcedForm: FormGroup;
  dataArray = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.divorcedForm = new FormGroup({
      otherpics: new FormControl(),
      fatherName: new FormControl(),
      fatherMobileNo: new FormControl(),
      fatherOccupation: new FormControl(),
      motherOccupation: new FormControl()
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DivorcedStep1Page');
    this.dataArray = this.navParams.get('dataArray');
  }

  submitDetails(data) {
    if(this.divorcedForm.valid) {
      this.dataArray['otherpics'] = data.otherpics,
      this.dataArray['fatherName'] = data.fatherName,
      this.dataArray['fatherMobileNo'] = data.fatherMobileNo,
      this.dataArray['fatherOccupation'] = data.fatherOccupation,
      this.dataArray['motherOccupation'] = data.motherOccupation,
      this.navCtrl.push(DivorcedStep2Page, {
        dataArray: this.dataArray,
      })
    }
  }

}
