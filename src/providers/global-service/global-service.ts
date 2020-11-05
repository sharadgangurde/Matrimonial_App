import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class User {

  id: any;
  
  constructor(user_id) {
   
    this.id = user_id;
  }
}
@Injectable()
export class GlobalServiceProvider {

  id: any;
  currentUser: any;
  
  constructor(public http: HttpClient) {
    console.log('Hello GlobleServiceProvider Provider');
  }
  public setUser(user_id) {
    console.log(user_id);
   
    this.id = user_id;
    window.localStorage.setItem('id', user_id);
    window.localStorage.setItem('response', JSON.stringify(user_id));
    this.currentUser = new User(user_id);
  }
  public getUserInfo(): User {
    return this.currentUser;
  }
  public setGlobleVariable() {

    this.id = window.localStorage.getItem('id');
    this.currentUser = new User(window.localStorage.getItem('response'));
  }
  public logout() {
    return Observable.create(observer => {
      window.localStorage.clear();
      this.currentUser = "";
      this.id = "";
      observer.next(true);
      observer.complete();
    });
  }

}
