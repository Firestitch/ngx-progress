import { LoadingBarService } from '@ngx-loading-bar/core';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FS_PROGRESS_DISABLE } from '../conts';


@Injectable()
export class ProgressInterceptor implements HttpInterceptor {

  constructor(private loader: LoadingBarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.context?.get(FS_PROGRESS_DISABLE)) {
      return next.handle(req.clone({ headers: req.headers.append('ignoreLoadingBar', '') }));
    }

    return next.handle(req);
  }
}