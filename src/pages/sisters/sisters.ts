import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, Slides, ViewController } from 'ionic-angular';
import moment from 'moment';
import { ValidationMessageProvider } from '../../providers/validation-message/validation-message';

/**
 * Generated class for the SistersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-sisters',
  templateUrl: 'sisters.html',
})
export class SistersPage {
  sistersArray = [];
  noOfSisters: any;
  calculateAge: any;
  validation_messages: any;
  @ViewChild('slides') slides: Slides;
  sistersForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
   validation: ValidationMessageProvider) {
    this.sistersForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      sisteroccupation: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
    });

    this.validation_messages = validation.validationMessage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SistersPage');
    this.noOfSisters = this.navParams.get('value');
  }

  
  public ageFromDateOfBirthday(birthdate: any): number {
    return moment().diff(birthdate, 'years');
  }

  next(data) {
    if(data) {
      this.sistersArray.push(data)
    }
    
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  close(data) {
    if(data) {
      this.sistersArray.push(data)
    }
    console.log('-------------Data-------------', this.sistersArray);
    this.viewCtrl.dismiss(this.sistersArray)
    this.navCtrl.pop()
  }

}
