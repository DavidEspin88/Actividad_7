import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// 1. Importa el proveedor de HttpClient
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() // 2. Añade el proveedor aquí
  ]
};