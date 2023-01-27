import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FsApi } from '@firestitch/api';
import { FsProgressService } from '@firestitch/progress';


@Component({
  selector: 'progress-dialog',
  templateUrl: 'progress-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class ProgressDialogComponent {

  public constructor(
    private api: FsApi, 
    private progressService: FsProgressService
  ) {}

  public start() {
    const progressDialog = this.progressService.open();
    this.updateMessage(progressDialog, 0);

    this.api.post('https://specify.dev.firestitch.com/api/dummy', { sleep: 5 })
      .subscribe(() =>  {
        progressDialog.complete();
      });
  }

  public updateMessage(progressDialog, count) {
    if(!progressDialog.completed) {
      progressDialog.updateMessage('Updating message' + '.'.repeat(count));
      setTimeout(() => {
        this.updateMessage(progressDialog, ++count);
      }, 500);
    }
  }
}
