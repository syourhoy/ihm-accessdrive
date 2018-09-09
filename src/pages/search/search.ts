import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import mapboxGlJs from 'mapbox-gl/dist/mapbox-gl.js';



/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage'); 
	mapboxGlJs.accessToken = 'pk.eyJ1IjoidGhpZXJyeWxvcmlzIiwiYSI6ImNqbHVydmNqeTBuaGczcW1lbHljZDNocDYifQ.6q6J-B6RKo9LM6_4P54vkg';
	var map = new mapboxGlJs.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v10'
	});

  }

}
