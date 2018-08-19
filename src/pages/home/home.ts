import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { UsersServicesProvider } from '../../providers/users-services/users-services';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  form = {number:"",save:false}


  constructor(public navCtrl: NavController, public http: Http, public service: UsersServicesProvider) {

  }
  logForm() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = {
      number : this.form.number
    };

    this.http.post('http://127.0.0.1', JSON.stringify(body), {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    });
    console.log(body);
  }

}
