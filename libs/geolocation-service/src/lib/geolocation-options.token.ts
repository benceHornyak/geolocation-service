import { InjectionToken } from '@angular/core';

export const POSITION_OPTIONS = new InjectionToken<PositionOptions>(
  'Token for position options',
  { factory: () => ({}) }
);
