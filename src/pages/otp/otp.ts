import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { ServiceProvider } from '../../providers/service/service';
import { SplashProvider } from '../../providers/splash/splash';
import { Step1Page } from '../sign-up/step1/step1';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

  otpForm: FormGroup;
  userData: any;
  serverOtp: any;
  email: any;
  id: any;
  nonExistingUser: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ServiceProvider,
    public splash: SplashProvider,
    public global: GlobalServiceProvider
    ) {
      
    this.otpForm = new FormGroup({
      otp: new FormControl('', [Validators.required]),
    });
  }

  ionViewDidLoad() {
   console.log('ionViewDidLoad OtpPage');
   this.email = this.navParams.get('email');
   this.nonExistingUser = this.navParams.get('nonExistingUser');
   this.id = this.navParams.get('id');
   this.userData =  this.navParams.get('data');
   this.serverOtp =  this.navParams.get('otp');
   this.splash.toast(this.serverOtp);
   console.log('user Data ', this.userData)
   console.log('OTP ', this.serverOtp)
  }

  // public verifyOtp(data) {
  //   console.log('Registration Flow');
  //   if(this.otpForm.valid) {
  //     console.log('Entered otp', data.otp)
  //     if(this.serverOtp == data.otp) {
  //       console.log('OTP1', this.serverOtp, 'OTP2', data.otp);
        

  //       let formdata = new FormData();
  //       formdata.append('firstname', this.userData.firstName);
  //       formdata.append('lastname', this.userData.lastName);
  //       formdata.append('email', this.userData.email);
  //       formdata.append('mobile', this.userData.phone);
  //       formdata.append('gender', this.userData.gender);
  //       formdata.append('dob', this.userData.date_of_birth);

  //       this.api.registration(formdata).subscribe(res => {
  //         console.log(res)
  //         if(res.flag == 0) {
  //           this.splash.toast(res.data);
  //         }
        
  //         if(res.flag == 6) {
  //           this.splash.toast(res.message);

  //           let formdata = new FormData();
  //           formdata.append('user_id', res.user_id);

  //           this.api.getAccountDetails(formdata).subscribe(res => {
  //             console.log('-----');
              
  //             console.log(res);
  //             if(res) {  
  //               this.global.setUser(res.data)
  //               this.navCtrl.push(JobDetailsPage)
  //             }
  //           })
  //         }
  //         if(res.flag == 7) {
  //           this.splash.toast('Registration Failed');
  //         }
  //       });
  //     }
  //   }
  //   else {
  //     console.log('form errr');

  //     Object.keys(this.otpForm.controls).forEach(field => {
  //       const control = this.otpForm.get(field);
  //       control.markAsTouched({ onlySelf: true });
  //     })
  //   }
   
  // }

  //same as register flow

  verifyLoginOtp(data) {
    console.log('Login Flow');
    console.log('server otp', this.serverOtp, ' ', data.otp)
    if(this.otpForm.valid) {
      this.splash.presentLoading()
      if(this.serverOtp == data.otp) {
        if(this.id == undefined) {
          this.splash.dismiss()
          this.splash.toast('Otp verified successfully!')
          this.navCtrl.push(Step1Page, {
            email: this.email,
          })
        } else {
          let formdata = new FormData();
          console.log(this.id);
          this.splash.toast('Otp verified successfully!')
          formdata.append('user_id', this.id)
          this.splash.presentLoading()
          this.api.getAccountDetails(formdata).subscribe(res => {
            console.log(res)
            if(res.status == "true") {
              this.splash.dismiss()
              this.global.setUser(this.id);
              this.navCtrl.push(TabsPage, {data: res.data})
            } else {
              this.splash.dismiss()
              this.splash.toast('Failed to load data')
            }
          })
        }
      } else {
        this.splash.toast('Invalid Otp');
      }
    }
  }
}
