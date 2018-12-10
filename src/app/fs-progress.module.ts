import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { merge } from 'lodash';

import { FsProgressComponent } from './components/fs-progress/fs-progress.component';
import { ProgressDialogComponent } from './components/fs-progress-dialog/progress-dialog.component';
import { FS_PROGRESS_DEFAULT_CONFIG, FS_PROGRESS_CONFIG } from './fs-progress.providers';
import { ProgressConfig } from './interfaces/progress-config';
import { FsProgressService } from './services/fs-progress.service';
import {  MatButtonModule,
          MatProgressSpinnerModule,
          MatDialogModule,
          MatIconModule} from '@angular/material'


@NgModule({
  imports: [
    CommonModule,
    LoadingBarHttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    FsProgressComponent,
    LoadingBarHttpClientModule
  ],
  entryComponents: [
    ProgressDialogComponent
  ],
  declarations: [
    ProgressDialogComponent,
    FsProgressComponent
  ],
  providers: [
    FsProgressService
  ],
})
export class FsProgressModule {
  static forRoot(config?: ProgressConfig): ModuleWithProviders {
    return {
      ngModule: FsProgressModule,
      providers: [
        { provide: FS_PROGRESS_DEFAULT_CONFIG, useValue: config },
        {
          provide: FS_PROGRESS_CONFIG,
          useFactory: FsProgressConfigFactory,
          deps: [FS_PROGRESS_DEFAULT_CONFIG]
        }
      ]
    };
  }
}

export function FsProgressConfigFactory(config: ProgressConfig) {
  return merge({ barHeight: 2, barColor: '#efefef', processingDialogMessage: 'Processing in progress. Please wait...' }, config);
}