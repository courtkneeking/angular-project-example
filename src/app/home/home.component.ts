import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  location: boolean = false;
  constructor( private _httpService : HttpService ,  private _route: ActivatedRoute, private _router: Router ) { 
  }
  ngOnInit( ) {
    this.getLocation();
  }
  getLocation(){
    if(this.location == false){
      this._httpService.getLocation();
      this.location = true;
    }
  }
}

