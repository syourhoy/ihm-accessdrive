import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import mapboxGlJs from 'mapbox-gl/dist/mapbox-gl.js';
import { Geolocation } from '@ionic-native/geolocation';
import { GeocodingServicesProvider } from '../../providers/geocoding-services/geocoding-services';

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

  private map: any;
  private location: [number, number];

  constructor(public navCtrl: NavController, private geolocation: Geolocation, public service: GeocodingServicesProvider) {
    mapboxGlJs.accessToken = 'pk.eyJ1IjoidGhpZXJyeWxvcmlzIiwiYSI6ImNqbHVydmNqeTBuaGczcW1lbHljZDNocDYifQ.6q6J-B6RKo9LM6_4P54vkg';
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    this.geolocation.getCurrentPosition().then((data) => {
      this.location = [data.coords.longitude, data.coords.latitude];
      this.map = new mapboxGlJs.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        center: this.location,
        zoom: 15
      });
      this.createMarker(this.location);

      this.service.getAdressFromCoords(this.location[0], this.location[1]).then((data) => {
        console.log(data['place_name'])
      })
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  createMarker(location: [number, number]) {
    let marker = new mapboxGlJs.Marker()
      .setLngLat(location)
      .addTo(this.map);
  }
}