import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  GeolocationServiceModule,
  POSITION_OPTIONS,
} from '@bencehornyak/geolocation-service';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: POSITION_OPTIONS,
      useValue: {
        enableHighAccuracy: true,
      } as PositionOptions,
    },
    GeolocationServiceModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
