import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, Slides, ViewController } from 'ionic-angular';
import moment from 'moment';
import { ValidationMessageProvider } from '../../providers/validation-message/validation-message';

/**
 * Generated class for the ChildrensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-childrens',
  templateUrl: 'childrens.html',
})
export class ChildrensPage {
  childrensForm: FormGroup;
  childrensArray = [];
  noOfChildrens: any;
  calculatedAge: any
  validation_messages: any;
  @ViewChild('slides') slides: Slides;
  invalidAgeMsg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public validation: ValidationMessageProvider) {
    this.childrensForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.maxLength(10)]),
    });

    this.validation_messages = this.validation.validationMessage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildrensPage');
    this.noOfChildrens = this.navParams.get('value');
  }

  public ageFromDateOfBirthday(birthdate: any): number {
    if(moment().diff(birthdate, 'years') < 18) {
      this.invalidAgeMsg = 'You are not elligible'
    }
    return moment().diff(birthdate, 'years');
  }

  next(data) {
    if(this.childrensForm.valid) {
      this.childrensArray.push(data)
    } else {
      console.log('form errr');

      Object.keys(this.childrensForm.controls).forEach(field => {
        const control = this.childrensForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
    
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  close(data) {
    if(this.childrensForm.valid) {
      this.childrensArray.push(data)
    } else {
      console.log('form errr');

      Object.keys(this.childrensForm.controls).forEach(field => {
        const control = this.childrensForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
    console.log('-------------Data-------------', this.childrensArray);
    this.viewCtrl.dismiss(this.childrensArray)
    this.navCtrl.pop()
  }

}
