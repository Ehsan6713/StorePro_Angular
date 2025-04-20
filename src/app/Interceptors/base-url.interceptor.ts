import { HttpInterceptorFn } from '@angular/common/http';
import { ApiAdress } from '../Utilities/api-address';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  if(!req.url.startsWith("http")){
    let modifiedUrl=req.clone({url:ApiAdress.baseLoginAdress+req.url});
    return next(modifiedUrl);
  }
  return next(req);
};
