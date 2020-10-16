import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';
import { Step2Page } from '../step2/step2';

/**
 * Generated class for the Step1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-step1',
  templateUrl: 'step1.html',
})
export class Step1Page {
  signUpForm: FormGroup;
  email: any;
  languages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider,
    public alertCtrl: AlertController) {
    
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      middleName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN) ]),
      phone1: new FormControl('', [Validators.required, ]),
      phone2: new FormControl('', [Validators.required])
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.email = this.navParams.get('email');
  }

  public signUp(data) {

    if (this.signUpForm.valid) {
      this.navCtrl.push(Step2Page, {data: data})
    }
    else {
      console.log('form errr');

      Object.keys(this.signUpForm.controls).forEach(field => {
        const control = this.signUpForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    }
  }

}
