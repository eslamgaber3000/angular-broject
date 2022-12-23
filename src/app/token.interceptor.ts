import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newUrl=request.clone({
      url:request.url.replace('api_key=','api_key=8a9fa7a239bf15ff53cc57096d0555c4')
    })
    return next.handle(newUrl);
  }
}
// api_key=8a9fa7a239bf15ff53cc57096d0555c4
// api_key=8a9fa7a239bf15ff53cc57096d0555c4
// api_key=8a9fa7a239bf15ff53cc57096d0555c4