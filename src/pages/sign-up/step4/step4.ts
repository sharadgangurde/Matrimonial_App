import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';
import { SplashProvider } from '../../../providers/splash/splash';
import { ValidationMessageProvider } from '../../../providers/validation-message/validation-message';
import { BusinessStep1Page } from '../../business-details/business-step1/business-step1';
import { DivorcedStep1Page } from '../../divorse-details/divorced-step1/divorced-step1';
import { HomePage } from '../../home/home';
import { JobDetailsPage } from '../../job-details/job-details';
import { MarriageStep1Page } from '../../marriage-details/marriage-step1/marriage-step1';

/**
 * Generated class for the Step4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-step4',
  templateUrl: 'step4.html',
})
export class Step4Page {

  signUpForm: FormGroup;
  step3data: any;
  dataArray = {};
  languages: any;
  listHobby :any = [];
  selecteHobby='';
  validation_messages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider,
    public alertCtrl: AlertController, public validation: ValidationMessageProvider, public splash: SplashProvider) {
    this.signUpForm = new FormGroup({
      langKnown: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      annual_income: new FormControl('', [Validators.required]),
      hobbies: new FormControl('', [Validators.required]),
      marital_status: new FormControl('', [Validators.required]),
      profession: new FormControl('', [Validators.required])
    });
    this.validation_messages = this.validation.validationMessage();
    console.log(this.validation_messages)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Step4Page');
    this.dataArray = this.navParams.get('dataArray'),
    this.languages = this.navParams.get('language')
    console.log('----------Page3----------',this.dataArray)
    console.log('----------language----------',this.languages)
  }

  goBack() {
    this.navCtrl.pop()
  }

  public signUp(data) {
    if(this.signUpForm.value) {
      // let formdata = new FormData();
      // formdata.append('email', data.email);
    
      // this.api.generateOtp(formdata).subscribe(res => {
      //   console.log(res)
      //   if (res.flag == 3) {
      //    // this.splash.toast(res.data);
      //    this.navCtrl.push(MarriageStep1Page, {data: data, otp: res.otp});
      //   }
      // });
      
      this.dataArray['languages'] = data.langKnown,
      this.dataArray['education'] = data.education,
      this.dataArray['hobbies'] = data.hobbies,
      this.dataArray['annual_income'] = data.annual_income,
      this.dataArray['marital_status'] = data.marital_status,
      this.dataArray['profession'] = data.profession,

      console.log('--------------------data till--------------- ', this.dataArray)
      if(data.marital_status == 'Unmarried') {
        this.navCtrl.push(MarriageStep1Page, {
          dataArray: this.dataArray
        })
      } else if(data.marital_status == 'Married') {
        console.log('----------------Married--------------')
        if(data.profession == 'Job') {
          this.navCtrl.push(JobDetailsPage, {
            dataArray: this.dataArray,
          })
        } else if(data.profession == 'Unemployed') {
          this.api.registration(this.dataArray).subscribe(res => {
            if(res.flag == 0) {
              this.splash.toast(res.message)        
            } else if(res.status == "true") {
              this.splash.toast(res.message)
              this.navCtrl.push(HomePage, {dataArray: this.dataArray})
            } else if(res.flag == 7) {
              this.splash.toast('Registration failed')
            }
          })
        } else if(data.profession == 'Business') {
          this.navCtrl.push(BusinessStep1Page, {
            dataArray: this.dataArray
          })
        }
      } else if(data.marital_status == 'Divorced') {
        this.navCtrl.push(DivorcedStep1Page, {
          dataArray: this.dataArray
        })
      }
    } else {
      console.log('form errr');

      Object.keys(this.signUpForm.controls).forEach(field => {
        const control = this.signUpForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    }
  }

  public addHobby() {
    let alert = this.alertCtrl.create({
      title: 'Add Hobby',
      inputs: [
        {
          name: 'hobby',
          placeholder: 'Enter Hobby'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
         //   console.log('Cancel clicked');
          }
        },
        {
          text: 'Add TO List',
          handler: data => {
            if (!data) {
              console.log('we have data',data.hobby)
            } else {
              // invalid login
              console.log('add hobby',data.hobby)
              this.selecteHobby = data.hobby;
              data.hobby = ''
             this.listHobby.push(this.selecteHobby);
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

}
