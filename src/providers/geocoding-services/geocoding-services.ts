import { Http, Headers } from '@angular/http'
import { Injectable } from '@angular/core';

/*
  Generated class for the GeocodingServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeocodingServicesProvider {

  apiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
  accessToken = 'pk.eyJ1IjoidGhpZXJyeWxvcmlzIiwiYSI6ImNqbHVydmNqeTBuaGczcW1lbHljZDNocDYifQ.6q6J-B6RKo9LM6_4P54vkg'

  constructor(public http: Http) {
    console.log('Hello GeocodingServicesProvider Provider');
  }

  getAdressFromCoords(long, lat) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.get(`${this.apiUrl}${long},${lat}.json?access_token=${this.accessToken}`)
        .map(res => res.json())
        .subscribe((data: any) => {
          resolve(JSON.parse(JSON.stringify(data['features'][0])));
        }, error => {
          resolve(error);
        });
    });
  }

}
