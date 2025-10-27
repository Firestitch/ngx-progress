import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FS_PROGRESS_CONFIG } from '../../progress.providers';
import { LoadingBarModule } from '@ngx-loading-bar/core';


@Component({
    selector: 'fs-progress',
    templateUrl: './progress.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [LoadingBarModule],
})
export class FsProgressComponent {
  
  public config;

  constructor() {
    const config = inject(FS_PROGRESS_CONFIG);

    this.config = config;
  }
}
