import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MymaterialModule } from './material/mymaterial/mymaterial.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WeatherService } from './service/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MymaterialModule
  ],
  providers: [
    provideAnimationsAsync(),
    WeatherService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
