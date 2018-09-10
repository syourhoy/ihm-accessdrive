import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import mapboxGlJs from 'mapbox-gl/dist/mapbox-gl.js';
import { Geolocation } from '@ionic-native/geolocation';




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

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.initMap();
    let watch = this.geolocation.watchPosition();

    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      console.log(data.coords.latitude);
      console.log(data.coords.longitude);
    });
  }

  initMap() {
    mapboxGlJs.accessToken = 'pk.eyJ1IjoidGhpZXJyeWxvcmlzIiwiYSI6ImNqbHVydmNqeTBuaGczcW1lbHljZDNocDYifQ.6q6J-B6RKo9LM6_4P54vkg';
    this.getCurrentLocation().then((location) => {
      let map = new mapboxGlJs.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        center: location,
        zoom: 15
      });
      let marker = new mapboxGlJs.Marker()
        .setLngLat(location)
        .addTo(map);
    });
  }

  getCurrentLocation() {
    return this.geolocation.getCurrentPosition().then((resp) => {
      return [resp.coords.longitude, resp.coords.latitude];
    }).catch((error) => {
      console.log('Error getting location', error);
    })
  }

}
