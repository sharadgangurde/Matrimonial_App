import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { ValidationMessageProvider } from '../../../providers/validation-message/validation-message';
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
  validation_messages: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public validation: ValidationMessageProvider) {
    this.divorcedForm = new FormGroup({
      otherpics: new FormControl(),
      fatherName: new FormControl('', [Validators.required]),
      motherName: new FormControl('', [Validators.required]),
      fatherMobileNo: new FormControl('', [Validators.required]),
      fatherOccupation: new FormControl('', [Validators.required]),
      motherOccupation: new FormControl('', [Validators.required])
    });

    this.validation_messages = this.validation.validationMessage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DivorcedStep1Page');
    this.dataArray = this.navParams.get('dataArray');
  }

  goBack() {
    this.navCtrl.pop()
  }

  submitDetails(data) {
    if(this.divorcedForm.valid) {
      this.dataArray['otherpics'] = data.otherpics,
      this.dataArray['fatherName'] = data.fatherName,
      this.dataArray['motherName'] = data.motherName,
      this.dataArray['fatherMobileNo'] = data.fatherMobileNo,
      this.dataArray['fatherOccupation'] = data.fatherOccupation,
      this.dataArray['motherOccupation'] = data.motherOccupation,
      this.navCtrl.push(DivorcedStep2Page, {
        dataArray: this.dataArray,
      })
    } else {
      console.log('form errr');

      Object.keys(this.divorcedForm.controls).forEach(field => {
        const control = this.divorcedForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
  } 

}
