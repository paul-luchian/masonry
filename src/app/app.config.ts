import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {BootstrapService} from "./shared/services/bootstrap/bootstrap.service";
import { provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./shared/interceptors/auth.interceptor";

export function appInitializerFactory(
  bootstrapService: BootstrapService
) {
  return () => bootstrapService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [BootstrapService],
      multi: true
    },
    provideRouter(routes)
  ]
};
