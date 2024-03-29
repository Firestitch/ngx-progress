import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FsProgressComponent } from './components/progress/progress.component';
import { FS_PROGRESS_CONFIG, FS_PROGRESS_DEFAULT_CONFIG } from './progress.providers';
import { ProgressConfig } from './interfaces/progress-config';
import { FsProgressService } from './services/progress.service';
import { FsProgressInterceptorModule } from './modules';


@NgModule({
  imports: [
    CommonModule,
    FsProgressInterceptorModule,
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
  declarations: [
    FsProgressComponent
  ],
  providers: [
    FsProgressService
  ],
})
export class FsProgressModule {
  static forRoot(config?: ProgressConfig): ModuleWithProviders<FsProgressModule> {
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
  return {      
      barHeight: 2,
      barColor: '#efefef',
      processingDialogMessage: 'Please wait...',
      ...config,
    };
}
