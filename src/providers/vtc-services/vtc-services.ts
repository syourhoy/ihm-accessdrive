import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { API } from '../../app/constants';

@Injectable()
export class VtcServicesProvider {

	constructor(public http: Http) {
		console.log('Hello VtcServicesProvider Provider');
	}

	getVtc(startLat, startLon, endpoint) {
		return this.http.get(API + '/overview?start[lat]='+ startLat +'&start[long]='+ startLon +'&end='+ endpoint);
	}

}
