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
      'email': [
        {type: 'required', message: 'Enter email-id'},
        {type: 'email', message: 'Enter a valid email'}
      ],
      'mobile': [
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
      ]
    }
    return this.validation_messages;
  }

}
