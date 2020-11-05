import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, Slides, ViewController } from 'ionic-angular';
import moment from 'moment';
import { ValidationMessageProvider } from '../../providers/validation-message/validation-message';


/**
 * Generated class for the BrothersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-brothers',
  templateUrl: 'brothers.html',
})


export class BrothersPage {

  totalBrothers = [];
  brothersForm: FormGroup;
  brotherDetailsForm: FormGroup;
  brothersArray = [];
  noOfBrothers: any;
  calculateAge: any;
  validation_messages: any;
  @ViewChild('slides') slides: Slides;
  invalidAgeMsg: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public validation: ValidationMessageProvider) {
    this.brothersForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      brotheroccupation: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    });
    
    this.validation_messages = this.validation.validationMessage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrothersPage');
    this.noOfBrothers = this.navParams.get('value');
  }

  
 /* dragging(){
    $("#contenitore").addClass("no-scroll")
   }
   */

  public ageFromDateOfBirthday(birthdate: any): number {
    // if(moment().diff(birthdate, 'years') < 18) {
    //   this.invalidAgeMsg = 'You are not elligible';
    // } else this.invalidAgeMsg = null;
    return moment().diff(birthdate, 'years');
  }
  
  next(data) {
    if(this.brothersForm.valid) {
      this.brothersArray.push(data)
    } else {
      console.log('form errr');

      Object.keys(this.brothersForm.controls).forEach(field => {
        const control = this.brothersForm.get(field);
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
    if(this.brothersForm.valid) {
      this.brothersArray.push(data)
    } else {
      console.log('form errr');

      Object.keys(this.brothersForm.controls).forEach(field => {
        const control = this.brothersForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
    console.log('-------------Data-------------', this.brothersArray);
    this.viewCtrl.dismiss(this.brothersArray)
    this.navCtrl.pop()
  }
  
  // submitDetails(data) {
  //   console.log('----------------- Brothers --------------', data);
  //   this.navCtrl.push(MarriageStep2Page)
  // }
}
