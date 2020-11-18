import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { UrlProvider } from '../url/url';
import { DefineProvider } from './../define/define';

@Injectable()
export class ServiceProvider {
  serverURl: any;
  emailValidateUrl: any;
  loginUrl: any;
  generateOtpUrl: any;
  registrationUrl: any;
  getAccountDetailsUrl: any;
  getCountriesUrl: any;
  getStatesUrl: any;
  getCitiesUrl: any;
  getLanguagesUrl: any;
  getUserListUrl: any;
  getUserDetailsUrl: any;
  // headers: any = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(public http: HttpClient, public events: Events,
    public urlProvider: UrlProvider, public DefineProvider: DefineProvider) {
    console.log('Hello ServiceProvider Provider');
    this.serverURl = this.urlProvider.serverUrl;
    this.emailValidateUrl = this.urlProvider.emailVerify;
    this.generateOtpUrl = this.urlProvider.generateOtp;
    this.registrationUrl = this.urlProvider.registration;
    this.getAccountDetailsUrl = this.urlProvider.getAccountDetails;
    this.getCountriesUrl = this.urlProvider.getCountries;
    this.getStatesUrl = this.urlProvider.getStatesByCountry;
    this.getCitiesUrl = this.urlProvider.getCitiesByState;
    this.getLanguagesUrl = this.urlProvider.getLanguages;
    this.getUserListUrl = this.urlProvider.getUserList;
    this.getUserDetailsUrl = this.urlProvider.getUserDetails;

  }
  public checkApi() {
    return (res: Response) => {
      if (res.status == 3) {
        //handle authorization errors
        //in this example I am navigating to login.
        console.log("Error_Token_Expired: redirecting to login.");
        this.events.publish('logout');
      }
      return (res);
    };


    // console.log(res);
    // if (res.status == 1) {
    //   // this.events.publish('logout');
    //   return res;

    // }
    // else {
    //   return res;
    // }

  }
 
  public emailVerify(formdata) {
    var result;

    result = this.http.post(this.serverURl + this.emailValidateUrl, (formdata)).map(this.checkApi());
    return result;
  }

  public generateOtp(formdata) {
    var result;

    result = this.http.post(this.serverURl + this.generateOtpUrl, (formdata)).map(this.checkApi());
    return result;
  }
 
  public login(formdata) {
    var result;

    result = this.http.post(this.serverURl + this.loginUrl, (formdata)).map(this.checkApi());
    return result;
  }

  public registration(formdata) {
    var result;
    console.log(formdata);
    
    result = this.http.post(this.serverURl + this.registrationUrl, (formdata)).map(this.checkApi());
    return result;
  }

  public getAccountDetails(formdata) {
    var result;
    console.log(formdata);
    result = this.http.post(this.serverURl + this.getAccountDetailsUrl, (formdata)).map(this.checkApi());
    return result;
  }
  
  public getAllCountries() {
    var result;

    result = this.http.post(this.serverURl + this.getCountriesUrl, '');
    return result;
  }

  public getLanguages() {
    var result;

    result = this.http.post(this.serverURl + this.getLanguagesUrl, '');
    return result;
  }

  public getStates(formdata) {
    var result;

    result = this.http.post(this.serverURl + this.getStatesUrl, (formdata)).map(this.checkApi());
    return result;
  }
  
  public getCities(formdata) {
    var result;

    result = this.http.post(this.serverURl + this.getCitiesUrl, (formdata)).map(this.checkApi());
    return result;
  }

  public getUserList() {
    var result;

    result = this.http.post(this.serverURl + this.getUserListUrl, '');
    console.log('------- UserList ',result)
    return result;
  }
  
  public getUserDetails(formdata) {
    var result;

    result = this.http.post(this.serverURl + this.getUserDetailsUrl, (formdata)).map(this.checkApi());
    return result;
  }
  }
