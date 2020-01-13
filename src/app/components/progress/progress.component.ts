import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FS_PROGRESS_CONFIG } from '../../progress.providers';


@Component({
  selector: 'fs-progress',
  templateUrl: 'progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsProgressComponent {
  public config;
  constructor(@Inject(FS_PROGRESS_CONFIG) config) {
    this.config = config;
  }
}
