import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public locations = [];
  marker:any;
  constructor(private _http : HttpClient) { 
  }
  getLocation(){
    let that = this;
      console.log('http serve location')
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSuccess);
      }else { 
        console.log('error')
      }
      function geoSuccess(position) {
        console.log(position);
        that.locations.push(position.coords);
        
      }
  }
  giveLocation(){
    let data = this.locations[0];
    return data;
  }
}
