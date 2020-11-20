import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// flags
// no data - 0
// email exists - 1
// email not exists - 2
// otp send - 3
// login true - 4
// login false - 5
// register true - 6
// register false - 7

@Injectable()
export class UrlProvider {
  serverUrl: string = 'https://moderni-projects.in/projects/codeigniter/portfolio/';
  loginUrl: string;
  emailVerify: any;
  generateOtp: any;
  registration: any;
  getAccountDetails: any;
  getCountries: any;
  getStatesByCountry: any;
  getCitiesByState: any;
  getLanguages: any;
  getUserList: any;
  getUserDetails: any;
  getBusinessUsers: any;
  getMatrimonyUsers: any;
  getNews: any;
  constructor(public http: HttpClient) {

    this.loginUrl = 'api/mobile/login';
    this.emailVerify = 'api/authentication/check_email_exist';    //email exist check
    this.generateOtp = 'api/authentication/generate_otp';
    this.registration = 'api/authentication/registration';
    this.getAccountDetails = 'api/authentication/get_account_details';
    this.getCountries = 'api/authentication/get_countries';
    this.getStatesByCountry = 'api/authentication/get_state';
    this.getCitiesByState = 'api/authentication/get_city';
    this.getLanguages = 'api/authentication/get_languages';
    this.getUserList = 'api/user/userList';
    this.getUserDetails = 'api/user/get_UsersDetailsByProfession';
    this.getBusinessUsers = 'api/user/get_businessUsers';
    this.getMatrimonyUsers = 'api/user/get_unmarriedUsers';
    this.getNews = 'api/user/get_newsList';
    //http://moderni-projects.in/projects/codeigniter/portfolio/api/user/get_user_post
  }

}
