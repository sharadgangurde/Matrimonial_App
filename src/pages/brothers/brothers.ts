import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, Slides, ViewController } from 'ionic-angular';
import moment from 'moment';

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
  @ViewChild('slides') slides: Slides;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.brothersForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrothersPage');
    this.noOfBrothers = this.navParams.get('value');
  }

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
