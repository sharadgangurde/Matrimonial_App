import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, Slides, ViewController } from 'ionic-angular';
import moment from 'moment';

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
  @ViewChild('slides') slides: Slides;
  sistersForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.sistersForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
    });
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
