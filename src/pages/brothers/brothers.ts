import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, Slides, ViewController } from 'ionic-angular';
import moment from 'moment';
import { ValidationMessageProvider } from '../../providers/validation-message/validation-message';



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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public validation: ValidationMessageProvider) {
    this.brothersForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
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
    return moment().diff(birthdate, 'years');
  }
  
  next(data) {
    if(data) {
      this.brothersArray.push(data)
    }
    
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  close(data) {
    if(data) {
      this.brothersArray.push(data)
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
