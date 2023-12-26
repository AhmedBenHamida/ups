import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes'; // This should work now

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};