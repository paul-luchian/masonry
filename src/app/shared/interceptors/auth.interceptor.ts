import {HttpInterceptorFn} from "@angular/common/http";
import {AppConfigService} from "../services/bootstrap/config.service";
import {inject} from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({setHeaders: {Authorization: `Client-ID ${inject(AppConfigService).unsplashAccessKey}`}});
  return next(authReq);
};
