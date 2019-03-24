import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'], 
})

export class MapComponent implements OnInit {
  lat;
  lng;
  constructor( private _httpService : HttpService, private _route: ActivatedRoute, private _router: Router) {
  }
  ngOnInit() {
    this.lat = this._httpService.locations[0].latitude;
    this.lng = this._httpService.locations[0].longitude;
  }
}

