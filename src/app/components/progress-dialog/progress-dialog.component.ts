import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProgressDialog } from '../../models/progress-dialog';



@Component({
  styleUrls: ['progress-dialog.component.scss'],
  templateUrl: 'progress-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressDialogComponent implements OnDestroy {

  public config;
  public isProcessing = true;
  public message = '';
  public progressDialog:ProgressDialog;

  private _destroy$ = new Subject();
  
  constructor(
    public dialogRef: MatDialogRef<ProgressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _cdRef: ChangeDetectorRef,
  ) {

    this.message = data.config.processingMessage;

    this.progressDialog = data.progressDialog;

    this.progressDialog
      .process$
       .pipe(
          takeUntil(this._destroy$)
        )
        .subscribe(() => {
          this.isProcessing = false;
          this.progressDialog.updateMessage('Done');
        });

    this.progressDialog
      .message$
        .pipe(
          takeUntil(this._destroy$)
        )
        .subscribe((message) => {
          this.message = message;
          this._cdRef.markForCheck();
        });
  }

  public close(): void {
    this.dialogRef.close();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

}

