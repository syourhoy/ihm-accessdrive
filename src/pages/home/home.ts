import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersServicesProvider } from '../../providers/users-services/users-services';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  form = {number:"",save:false}


  constructor(public navCtrl: NavController, public service: UsersServicesProvider) {

  }
  logForm() {
    console.log(this.form)
  }

}
