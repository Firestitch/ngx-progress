import { Component } from '@angular/core';
import { FsApi } from '@firestitch/api';
import { FsProgressService } from 'src/app/services';


@Component({
  selector: 'progress-dialog',
  templateUrl: 'progress-dialog.component.html'
})
export class ProgressDialogComponent {

  public constructor(private fsApi: FsApi, private fsProgressService: FsProgressService) {}

  public start() {

    const progressDialog = this.fsProgressService.open({ completedMessage: 'All Done!' });

    this.fsApi.post('https://boilerplate.firestitch.com/api/dummy', { sleep: 5 })
    .subscribe(() =>  {
      progressDialog.complete();
    });
  }
}
