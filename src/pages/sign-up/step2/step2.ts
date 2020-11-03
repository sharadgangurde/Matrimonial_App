import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';
import { SplashProvider } from '../../../providers/splash/splash';
import { ValidationMessageProvider } from '../../../providers/validation-message/validation-message';
import { Step3Page } from '../step3/step3';

/**
 * Generated class for the Step2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-step2',
  templateUrl: 'step2.html',
})
export class Step2Page {

  signUpForm: FormGroup;
  step1data: any;
  dataArray = {};
  countries: any;
  states: any;
  cities: any;
  validation_messages: any;
  languages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider,
    public validation: ValidationMessageProvider, public splash: SplashProvider
    ) {
    this.signUpForm = new FormGroup({
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      present_address: new FormControl('', [Validators.required]),
      permanent_address: new FormControl('', [Validators.required])
    });

    this.validation_messages = this.validation.validationMessage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step2Page');
    this.dataArray = this.navParams.get('dataArray');
    console.log('-----------Step1 data-------------',this.dataArray)
    this.countries = this.navParams.get('country')
    // this.api.getAllCountries().subscribe(res => {
    //   console.log(res);
    //   this.countries = res.data;
    // })
  }

  onSelectCountry(id){
    
    let formdata = new FormData();
    formdata.append('country_id', id);
    this.splash.presentLoading()
    this.api.getStates(formdata).subscribe(res => {
      console.log('-------------------States-----------', res.data)
      this.states = res.data;
      this.splash.dismiss()
    })
  }

  onSelectState(id) {
    let formdata = new FormData();
    formdata.append('state_id', id);
    this.splash.presentLoading()
    
    this.api.getCities(formdata).subscribe(res => {
      console.log('--------------------Cities-------------', res.data);
      this.cities = res.data;
      this.splash.dismiss()
    })
  }

  onSelectCity(city) {
    console.log('--------------------Selected City-------------', city.id);
  }

  signUp(data) {
    if(this.signUpForm.valid) {
      // let formdata = {
      //   country: data.country,
      //   state: data.state,
      //   city: data.city,
      //   present_address: data.present_address,
      //   permanent_address: data.permanent_address,
      // }
      //console.log('--------------form data----------------- ',formdata)

      this.dataArray['country'] = data.country,
      this.dataArray['state'] = data.state,
      this.dataArray['city'] = data.city,
      this.dataArray['present_address'] = data.present_address,
      this.dataArray['permanent_address'] = data.permanent_address
      
      this.navCtrl.push(Step3Page, {dataArray: this.dataArray})
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

  goBack() {
    this.navCtrl.pop()
  }

}
