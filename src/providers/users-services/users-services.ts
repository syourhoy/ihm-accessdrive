import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsersServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersServicesProvider {

  apiUrl = 'http://localhost:3000/api';

  constructor(public http: Http) {
    console.log('Hello UsersServicesProvider Provider');
  }

  getUsers(body:{number: string;}){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.apiUrl + '/user/create', JSON.stringify(body), {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    });
  }

}
