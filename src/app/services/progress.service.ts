import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FS_PROGRESS_CONFIG } from '../progress.providers';
import { ProgressDialogComponent } from '../components/progress-dialog/progress-dialog.component';
import { ProgressDialog } from '../models/progress-dialog';
import { ProgressDialogConfig } from '../interfaces/progress-dialog-config';


@Injectable()
export class FsProgressService {

  constructor(public dialog: MatDialog,
              @Inject(FS_PROGRESS_CONFIG) private config) {}

  public open(config?: ProgressDialogConfig) {

    const progressDialog = new ProgressDialog();

    config = Object.assign({  processingMessage: this.config.processingDialogMessage,
                              completedMessage: this.config.completedDialogMessage }, config);

    const dialogRef = this.dialog.open(ProgressDialogComponent, {
      disableClose: true,
      data: { progressDialog: progressDialog, config: config }
    });

    progressDialog.setDialogRef(dialogRef);

    dialogRef.afterClosed().subscribe(result => {

    });

    return progressDialog;
  }
}
