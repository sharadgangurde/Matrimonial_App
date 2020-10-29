import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, Slides, ViewController } from 'ionic-angular';
import moment from 'moment';

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
  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.childrensForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildrensPage');
    this.noOfChildrens = this.navParams.get('value');
  }

  public ageFromDateOfBirthday(birthdate: any): number {
    return moment().diff(birthdate, 'years');
  }

  next(data) {
    if(data) {
      this.childrensArray.push(data)
    }
    
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  close(data) {
    if(data) {
      this.childrensArray.push(data)
    }
    console.log('-------------Data-------------', this.childrensArray);
    this.viewCtrl.dismiss(this.childrensArray)
    this.navCtrl.pop()
  }

}
