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
  serverUrl: string = 'https://moderni-projects.in/projects/codeigniter/portfolio/api/'
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
<<<<<<< HEAD
  getNewsList: any;
=======
  getBusinessUsers: any;
  getMatrimonyUsers: any;
>>>>>>> 9b89b31da7dbdc8b929590d61dc667f68cc1c3b7
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
    this.getUserDetails = 'user/userDetails';
<<<<<<< HEAD
    this.getNewsList = 'user/get_newsList';
  //  http://moderni-projects.in/projects/codeigniter/portfolio/api/user/get_newsList
 
=======
    this.getBusinessUsers = 'user/get_businessUsers';
    this.getMatrimonyUsers = 'user/get_unmarriedUsers';
    
    //http://moderni-projects.in/projects/codeigniter/portfolio/api/user/get_user_post
>>>>>>> 9b89b31da7dbdc8b929590d61dc667f68cc1c3b7
  }

}
