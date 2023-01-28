import { Subject } from 'rxjs';


export class ProgressDialog {

  public completed = false;

  private _dialogRef;
  private _processSubject$ = new Subject();
  private _message$ = new Subject<string>();

  public setDialogRef(dialogRef) {
    this._dialogRef = dialogRef;
  }

  public complete() {
    this._processSubject$.next();
    this._processSubject$.complete();
    this.completed = true;
  }

  public get process$() {
    return this._processSubject$.asObservable();
  }

  public get message$() {
    return this._message$.asObservable();
  }

  public updateMessage(message) {
    this._message$.next(message);
  }

  public close() {
    this._dialogRef.close();
  }
}
