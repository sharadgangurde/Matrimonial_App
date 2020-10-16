import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';
import { Step3Page } from '../step3/step3';

/**
 * Generated class for the Step2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step2',
  templateUrl: 'step2.html',
})
export class Step2Page {

  signUpForm: FormGroup;
  step1data: any;
  countries: any;
  states: any;
  cities: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider) {
    this.signUpForm = new FormGroup({
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      present_address: new FormControl('', [Validators.required]),
      permanent_address: new FormControl('', [Validators.required])
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step2Page');
    this.step1data = this.navParams.get('data');
    console.log('-----------Step1 data-------------',this.step1data)
    this.api.getAllCountries().subscribe(res => {
      console.log(res);
      this.countries = res.data;
    })
  }

  onSelectCountry(country){
    
    let formdata = new FormData();
    formdata.append('country_id', country.id);
    
    this.api.getStates(formdata).subscribe(res => {
      console.log('-------------------States-----------', res.data)
      this.states = res.data;
    })
  }

  onSelectState(state) {
    console.log('-------------Selected State id----------------', state.id);

    let formdata = new FormData();
    formdata.append('state_id', state.id);

    this.api.getCities(formdata).subscribe(res => {
      console.log('--------------------Cities-------------', res.data);
      this.cities = res.data;
    })
  }

  onSelectCity(city) {
    console.log('--------------------Selected City-------------', city.id);
  }

  signUp(data) {
    if(this.signUpForm.valid) {
      let formdata = {
        country: data.country.name,
        state: data.state.name,
        city: data.city.name,
        present_address: data.present_address,
        permanent_address: data.permanent_address,
      }
      console.log('--------------form data----------------- ',formdata)
      this.navCtrl.push(Step3Page, {step2data: formdata, step1data: this.step1data})
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
