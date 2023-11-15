import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProgressInterceptor } from './../interceptors/progress.interceptor';


@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressInterceptor,
      multi: true,
    },
  ],
})
export class FsProgressInterceptorModule {
}
