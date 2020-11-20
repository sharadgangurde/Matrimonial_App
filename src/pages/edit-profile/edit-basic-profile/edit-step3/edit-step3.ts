import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, App, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';
import { ServiceProvider } from '../../../../providers/service/service';
import { ValidationMessageProvider } from '../../../../providers/validation-message/validation-message';
import { UserListPage } from '../../../user/user-list/user-list';

/**
 * Generated class for the EditStep3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-edit-step3',
  templateUrl: 'edit-step3.html',
})
export class EditStep3Page {

  signUpForm: FormGroup;
  step2data: any;
  dataArray = {};
  validation_messages: any;
  calculatedAge: any
  languages: any;
  invalidAgeMsg: any;
  listHobby :any = [];
  selecteHobby='';
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public validation: ValidationMessageProvider, public alertCtrl: AlertController,
    public api: ServiceProvider, public app: App) {
    this.signUpForm = new FormGroup({
      date_of_birth: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      langKnown: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      annual_income: new FormControl('', [Validators.required]),
      hobbies: new FormControl('', [Validators.required]),
      // gender: new FormControl('', [Validators.required]),
      // religion: new FormControl('', [Validators.required]),
      // caste: new FormControl('', [Validators.required])
    });

    this.validation_messages = this.validation.validationMessage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step3Page');
    this.dataArray = this.navParams.get('dataArray');
    this.user = this.navParams.get('user')
    console.log('==========Data Step2=========== ', this.dataArray)
    this.api.getLanguages().subscribe(res => {
      if(res.flag == 8) {
        this.languages = res.data;
      }
    })
  }

  public ageFromDateOfBirthday(birthdate: any): number {
    if(moment().diff(birthdate, 'years') < 18) {
      this.invalidAgeMsg = 'Only 18+ are allowed';
    } else this.invalidAgeMsg = null;
    return moment().diff(birthdate, 'years');
  }
  

  goBack() {
    this.navCtrl.pop()
  }
  
  signUp(data) {
    if(this.signUpForm.valid) {
      //this.dataArray.push(data)
      this.dataArray['languages'] = data.langKnown,
      this.dataArray['education'] = data.education,
      this.dataArray['hobbies'] = this.listHobby,
      this.dataArray['annual_income'] = data.annual_income,
      this.dataArray['dob'] = data.date_of_birth,
      this.dataArray['age'] = data.age
      // this.dataArray['gender'] = data.gender,
      // this.dataArray['religion'] = data.religion,
      // this.dataArray['caste'] = data.caste,
      this.app.getRootNav().setRoot(UserListPage)
     
    }
    else {
      console.log('form errr');

      Object.keys(this.signUpForm.controls).forEach(field => {
        const control = this.signUpForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
  }
  public addHobby() {
    let alert = this.alertCtrl.create({
      title: 'Add Hobby',
      inputs: [
        {
          name: 'hobby',
          placeholder: 'Enter Hobby',
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
              this.listHobby.push(this.selecteHobby);
              
              return true;
            }
          }
        }
      ]
    });
    alert.present();
  }

}
