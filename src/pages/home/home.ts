import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { UsersServicesProvider } from '../../providers/users-services/users-services';
import { SearchPage } from '../search/search';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  location: [number, number];

  private form = { number: "", save: false }

  constructor(public navCtrl: NavController, public service: UsersServicesProvider, private geolocation: Geolocation ) {
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then((data) => {
      this.location = [data.coords.longitude, data.coords.latitude];
      console.log(location);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  logForm() {
    let body = { number: this.form.number };
    this.service.getUsers(body);
    this.navCtrl.push(SearchPage, {
      data: this.location
    });
  }

}
