import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { API } from '../../app/constants';

@Injectable()
export class UsersServicesProvider {

  constructor(public http: Http) {
    console.log('Hello UsersServicesProvider Provider');
  }

  getUsers(body:{number: string;}){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(API + '/user/create', JSON.stringify(body), {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
      return data;
    });
  }

}
