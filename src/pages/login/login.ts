import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Events, NavController, NavParams } from 'ionic-angular';
import { DefineProvider } from '../../providers/define/define';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { ServiceProvider } from '../../providers/service/service';
import { SplashProvider } from '../../providers/splash/splash';
import { OtpPage } from '../otp/otp';
import { Step1Page } from '../sign-up/step1/step1';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  constructor(
    public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider,
    public DefineProvider: DefineProvider, public global: GlobalServiceProvider, public events: Events,
    public splash: SplashProvider
    ) {
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required,]),
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public signUp() {
    this.navCtrl.push(Step1Page);
  }

  public verifyEmail(data) {
    if (this.loginForm.valid) {
      let formdata = new FormData();
      formdata.append('email', data.email);

      this.api.emailVerify(formdata).subscribe(res => {
        console.log(res)
        let user_id = res.user_id;
        if(res.flag == 0) {
          this.splash.toast(res.data);
        }
        
        if(res.flag == 1) {

          this.splash.toast(res.messsage);

          let formdata = new FormData();
          formdata.append('email', data.email);
        
          this.api.generateOtp(formdata).subscribe(res => {
            console.log(res)
            if (res.flag == 3) {
            // this.splash.toast(res.data);
            this.navCtrl.push(OtpPage, {email: data.email, otp: res.otp, id: user_id});
            }
          });
        }

        if (res.flag == 2) {
         this.splash.toast(res.message);
         this.navCtrl.push(Step1Page, {email: data.email})
        }
        
        if (res.status == 2) {
          this.splash.toast('Error Occured Please Try After Some Time');
        }
        if (res.status == 3) {
          this.events.publish('logout');
        }
      });

    }
    else {
      console.log('form errr');

      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    }
  }

}
