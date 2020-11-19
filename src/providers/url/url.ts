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
  serverUrl: string = 'https://moderni-projects.in/projects/codeigniter/portfolio/api/';
  imageUrl: string = 'http://moderni-projects.in/projects/codeigniter/portfolio/uploads/profile_images/'
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

    this.loginUrl = 'mobile/login';
    this.emailVerify = 'authentication/check_email_exist';    //email exist check
    this.generateOtp = 'authentication/generate_otp';
    this.registration = 'authentication/registration';
    this.getAccountDetails = 'authentication/get_account_details';
    this.getCountries = 'authentication/get_countries';
    this.getStatesByCountry = 'authentication/get_state';
    this.getCitiesByState = 'authentication/get_city';
    this.getLanguages = 'authentication/get_languages';
    this.getUserList = 'user/userList';
    this.getUserDetails = 'user/get_UsersDetailsByProfession';
    this.getBusinessUsers = 'user/get_businessUsers';
    this.getMatrimonyUsers = 'user/get_unmarriedUsers';
    this.getNews = 'user/get_newsList';
    //http://moderni-projects.in/projects/codeigniter/portfolio/api/user/get_user_post
  }

}
