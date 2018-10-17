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
   private dest: string;
   private displayRides: boolean = false;

   constructor(public navCtrl: NavController, public service: GeocodingServicesProvider, public navParams: NavParams) {
     mapboxGlJs.accessToken = 'pk.eyJ1IjoidGhpZXJyeWxvcmlzIiwiYSI6ImNqbHVydmNqeTBuaGczcW1lbHljZDNocDYifQ.6q6J-B6RKo9LM6_4P54vkg';
     this.location = navParams.get('data');
   }

   ionViewDidLoad() {
     this.initMap();
     this.createMarker(this.location);

   }

   initMap() {
     this.map = new mapboxGlJs.Map({
       container: 'map',
       style: 'mapbox://styles/mapbox/streets-v10',
       center: this.location,
       zoom: 15
     });
     this.service.getAdressFromCoords(this.location[0], this.location[1]).then((data) => {
       console.log(data['place_name'])
     })

   }

   createMarker(location: [number, number]) {
     let marker = new mapboxGlJs.Marker()
     .setLngLat(location)
     .addTo(this.map);
   }

   setDisplayRides() {
     this.displayRides = true;
   }

 }