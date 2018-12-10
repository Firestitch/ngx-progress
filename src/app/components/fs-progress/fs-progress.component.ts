import { Component, Inject } from '@angular/core';
import { FS_PROGRESS_CONFIG } from '../../fs-progress.providers';


@Component({
  selector: 'fs-progress',
  templateUrl: 'fs-progress.component.html'
})
export class FsProgressComponent {
  public config;
  constructor(@Inject(FS_PROGRESS_CONFIG) config) {
    this.config = config;
  }
}
