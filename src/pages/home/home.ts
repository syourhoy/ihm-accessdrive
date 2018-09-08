import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { UsersServicesProvider } from '../../providers/users-services/users-services';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private form = {number:"",save:false}

  constructor(public navCtrl: NavController, public service: UsersServicesProvider) {
  }

  logForm() {
    let body = { number : this.form.number };
    this.service.getUsers(body);
    this.navCtrl.push(SearchPage);
  }

}
