import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location-marker',
  templateUrl: './location-marker.component.html',
  styleUrls: ['./location-marker.component.css']
})
export class LocationMarkerComponent implements OnInit {
    lat:Number;
    lng:Number;
    constructor( private _httpService : HttpService, private _route: ActivatedRoute, private _router: Router) {
      this.lat = _httpService.locations[0].latitude;
      this.lng = _httpService.locations[0].longitude;
    }
    ngOnInit() {
    }

}
