import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routesTwo } from './app-two.routes';

export const appTwoConfig: ApplicationConfig = {
  providers: [provideRouter(routesTwo)]
};
