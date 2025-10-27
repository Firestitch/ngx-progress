import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';


import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { FsProgressComponent } from './components/progress/progress.component';
import { ProgressConfig } from './interfaces/progress-config';
import { FsProgressInterceptorModule } from './modules';
import { FS_PROGRESS_CONFIG, FS_PROGRESS_DEFAULT_CONFIG } from './progress.providers';
import { FsProgressService } from './services/progress.service';


@NgModule({
    imports: [
        CommonModule,
        FsProgressInterceptorModule,
        LoadingBarHttpClientModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        FsProgressComponent,
    ],
    exports: [
        FsProgressComponent,
        LoadingBarHttpClientModule,
    ],
    providers: [
        FsProgressService,
    ],
})
export class FsProgressModule {
  public static forRoot(config?: ProgressConfig): ModuleWithProviders<FsProgressModule> {
    return {
      ngModule: FsProgressModule,
      providers: [       
        { provide: FS_PROGRESS_DEFAULT_CONFIG, useValue: config },
        {
          provide: FS_PROGRESS_CONFIG,
          useFactory: fsProgressConfigFactory,
          deps: [FS_PROGRESS_DEFAULT_CONFIG],
        },
      ],
    };
  }
}

export function fsProgressConfigFactory(config: ProgressConfig) {
  return {      
    barHeight: 3,
    barColor: '#7BB8FF',
    processingDialogMessage: 'Please wait...',
    ...config,
  };
}
