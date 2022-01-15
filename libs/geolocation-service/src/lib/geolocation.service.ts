import { Inject, Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { GEOLOCATION } from './geolocation.token';
import { POSITION_OPTIONS } from './geolocation-options.token';
import { GEOLOCATION_SUPPORT } from './geolocation-support.token';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService extends Observable<
  Parameters<PositionCallback>[0]
> {
  constructor(
    @Inject(POSITION_OPTIONS) options: PositionOptions,
    @Inject(GEOLOCATION) geolocationRef: Geolocation,
    @Inject(GEOLOCATION_SUPPORT) geolocationSupported: boolean
  ) {
    let watchPositionId: number;

    console.log(options);

    super((sub) => {
      if (!geolocationSupported) {
        sub.error('Geolocation is not supported in your browser');
      }

      watchPositionId = geolocationRef.watchPosition(
        (position) => sub.next(position),
        (positionError) => sub.error(positionError),
        {
          ...options,
        }
      );
    });

    return this.pipe(
      finalize(() => geolocationRef.clearWatch(watchPositionId))
    ) as GeolocationService;
  }
}
