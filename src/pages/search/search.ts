import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import mapboxGlJs from 'mapbox-gl/dist/mapbox-gl.js';
import { Geolocation } from '@ionic-native/geolocation';
import { VtcServicesProvider } from '../../providers/vtc-services/vtc-services';

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
   private location: [number, number] = [48.8624671, 2.2249402];
   private dest: string;
   private displayRides: boolean = false;
   private vtcList:any = null;

   constructor(public navCtrl: NavController,
     public vtcService: VtcServicesProvider,
     public navParams: NavParams) {
     mapboxGlJs.accessToken = 'pk.eyJ1IjoidGhpZXJyeWxvcmlzIiwiYSI6ImNqbHVydmNqeTBuaGczcW1lbHljZDNocDYifQ.6q6J-B6RKo9LM6_4P54vkg';
     if(navParams.get('data'))
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

   }

   createMarker(location: [number, number]) {
     let marker = new mapboxGlJs.Marker()
     .setLngLat(location)
     .addTo(this.map);
   }

   setDisplayRides() {
     this.vtcService.getVtc(this.location[0], this.location[1], this.dest)
     .map(response => response.json())
     .subscribe(data => {
       console.log(data);
       this.vtcList = data;
       this.displayRides = true;
     });
   }

 }