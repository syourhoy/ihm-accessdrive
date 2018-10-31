import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import mapboxGlJs from 'mapbox-gl/dist/mapbox-gl.js';
import MapboxDirections from 'mapbox-gl-directions/mapbox-gl-directions.js';
import { Geolocation } from '@ionic-native/geolocation';
import { VtcServicesProvider } from '../../providers/vtc-services/vtc-services';
import { mapBoxToken } from '../../app/constants';

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
   private direction: any;
   private location: [number, number] = [2.2249402, 48.8624671];
   private location1: [number, number] = [2.391359, 48.8140055];
   private dest: string;
   private displayRides: boolean = false;
   private displayLoader: boolean = false;
   private vtcList:any = null;

   constructor(public navCtrl: NavController,
     public vtcService: VtcServicesProvider,
     public navParams: NavParams) {
     mapboxGlJs.accessToken = mapBoxToken;
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
     this.direction = new MapboxDirections({
       accessToken: mapBoxToken,
       profile: 'mapbox/driving',
       interactive: false
     });
     this.map.addControl(this.direction);
   }

   createMarker(location: [number, number]) {
     let marker = new mapboxGlJs.Marker()
     .setLngLat(location)
     .addTo(this.map);
   }

   setDisplayRides() {
     this.displayLoader = true;
     this.vtcService.getVtc(this.location[1], this.location[0], this.dest)
     .map(response => response.json())
     .subscribe(data => {
       console.log(data);
       this.vtcList = data["vtc"];
       this.displayRides = true;
       this.displayLoader = false;
       this.direction.setOrigin(this.location);
       this.direction.setDestination([data["destination"].longitude, data["destination"].latitude]);
     });
   }

 }