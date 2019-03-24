import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationMarkerComponent } from './location-marker/location-marker.component';

import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    StartComponent,
    LocationMarkerComponent,
    ColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'insert your google maps key here',
    }),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
