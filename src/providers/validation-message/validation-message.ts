import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ValidationMessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidationMessageProvider {
  validation_messages: any;
  constructor(public http: HttpClient) {
    console.log('Hello ValidationMessageProvider Provider');
  }
  validationMessage() {
    this.validation_messages = {
      'firstName': [
        {type: 'required', message: 'Enter a name'},
        {type: 'pattern', message: 'Enter a valid name'}
      ],
      'lastName': [
        {type: 'required', message: 'Enter a last name'},
        {type: 'pattern', message: 'Enter a valid name'}
      ],
      'middleName': [
        {type: 'required', message: 'Enter a last name'},
        {type: 'pattern', message: 'Enter a valid name'}
      ],
      'email': [
        {type: 'required', message: 'Enter email-id'},
        {type: 'email', message: 'Enter a valid email'}
      ],
      'mobile': [
        {type: 'required', message: 'Enter mobile number'},
        {type: 'minlength', message: 'Enter a valid Number'}
      ],
      'phone1': [
        {type: 'required', message: 'Enter mobile number'},
        {type: 'minlength', message: 'Enter a valid Number'}
      ],
      'phone2': [
        {type: 'required', message: 'Enter mobile number'},
        {type: 'minlength', message: 'Enter a valid Number'}
      ],
      'address': [
        {type: 'required', message: 'Enter the address'},
      ],
      'fromDate': [
        {type: 'required', message: 'Select the date'},
      ],
      'milkType': [
        {type: 'required', message: 'Please select a milktype'},
      ],
      'session': [
        {type: 'required', message: 'Please Select a session'},
      ],
      'amount': [
        {type: 'required', message: 'Please Enter a amount'},
      ],
      'selectedLang': [
        {type: 'required', message: 'Select atleast one language'},
      ],
      'city': [
        {type: 'required', message: 'Select the city'},
      ],
      'state': [
        {type: 'required', message: 'Select the state'},
      ],
      'country': [
        {type: 'required', message: 'Select the country'},
      ],
      'permanent_address': [
        {type: 'required', message: 'Select the address'},
      ],
      'present_address': [
        {type: 'required', message: 'Select the address'},
      ],
      'date_of_birth': [
        {type: 'required', message: 'Select the date'},
      ],
      'gender': [
        {type: 'required', message: 'Select the gender'},
      ],
      'age': [
        {type: 'required', message: 'Select enter age'},
      ],
      'religion': [
        {type: 'required', message: 'Select the religion'},
      ],
      'caste': [
        {type: 'required', message: 'Enter the caste'},
      ],
      'marital_status': [
        {type: 'required', message: 'Select marital status'},
      ],
      'education': [
        {type: 'required', message: 'Select education'},
      ],
      'annual_income': [
        {type: 'required', message: 'Select annual income'},
      ],
      'hobbies': [
        {type: 'required', message: 'Enter hobbies seperated by comma'},
      ],
      'profession': [
        {type: 'required', message: 'Select profession status'},
      ],
    }
    return this.validation_messages;
  }

}
