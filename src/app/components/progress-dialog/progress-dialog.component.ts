import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  styleUrls: ['progress-dialog.component.scss'],
  templateUrl: 'progress-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressDialogComponent {

  public config;
  public isProcessing = true;
  public message = '';

  constructor(public dialogRef: MatDialogRef<ProgressDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _cdRef: ChangeDetectorRef) {

    this.message = data.config.processingMessage;

    data.progressDialog
      .processSubscribe((event) => {
        this.isProcessing = false;
        this.message = 'Done';

        this._cdRef.markForCheck();
      });
  }

  close(): void {
    this.dialogRef.close();
  }
}

