import { Subject } from "rxjs";

export class ProgressDialog {

  private dialogRef;
  private processSubject = new Subject();

  public setDialogRef(dialogRef) {
    this.dialogRef = dialogRef;
  }

  public complete() {
    this.processSubject.next();
    this.processSubject.complete();
  }

  public processSubscribe(func) {
    this.processSubject.subscribe(func);
  }

  public close() {
    this.dialogRef.close();
  }
}