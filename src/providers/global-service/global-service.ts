import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class User {

  id: any;
  
  constructor(response) {
   
    this.id = response.id;
  }
}
@Injectable()
export class GlobalServiceProvider {

  id: any;
  currentUser: any;
  
  constructor(public http: HttpClient) {
    console.log('Hello GlobleServiceProvider Provider');
  }
  public setUser(response) {
    console.log(response);
   
    this.id = response.id;
    window.localStorage.setItem('id', response.id);
    window.localStorage.setItem('response', JSON.stringify(response));
    this.currentUser = new User(response);
  }
  public getUserInfo(): User {
    return this.currentUser;
  }
  public setGlobleVariable() {

    this.id = window.localStorage.getItem('id');
    this.currentUser = new User(JSON.parse(window.localStorage.getItem('response')));
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
