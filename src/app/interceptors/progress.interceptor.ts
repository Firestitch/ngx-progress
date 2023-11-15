import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { Observable } from 'rxjs';

import { FS_PROGRESS_DISABLE } from '../conts';


@Injectable()
export class ProgressInterceptor implements HttpInterceptor {

  public constructor(private loader: LoadingBarService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.context?.get(FS_PROGRESS_DISABLE)) {
      return next.handle(req.clone({ headers: req.headers.append('ignoreLoadingBar', '') }));
    }

    return next.handle(req);
  }
}