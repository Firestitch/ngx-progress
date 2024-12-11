import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { FS_PROGRESS_DISABLE } from '../conts';


@Injectable()
export class ProgressInterceptor implements HttpInterceptor {

  constructor() { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.context?.get(FS_PROGRESS_DISABLE)) {
      return next.handle(req.clone({ headers: req.headers.append('ignoreLoadingBar', '') }));
    }

    return next.handle(req);
  }
}
