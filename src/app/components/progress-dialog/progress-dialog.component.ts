import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  styleUrls: ['progress-dialog.component.scss'],
  templateUrl: 'progress-dialog.component.html'
})
export class ProgressDialogComponent {

  public config;
  public isProcessing = true;
  public message = '';

  constructor(public dialogRef: MatDialogRef<ProgressDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.message = data.config.processingMessage;

    data.progressDialog
      .processSubscribe((event) => {
        this.isProcessing = false;
        this.message = 'Done';
      });
  }

  close(): void {
    this.dialogRef.close();
  }
}

