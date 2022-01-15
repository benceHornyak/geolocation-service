import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';

export const GEOLOCATION = new InjectionToken<Geolocation>(
  'Token for window.navigator.geolocation object',
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  { factory: () => inject(DOCUMENT).defaultView!.navigator.geolocation }
);
