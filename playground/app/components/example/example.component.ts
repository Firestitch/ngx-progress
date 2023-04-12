import { HttpContext } from '@angular/common/http';
import { Component } from '@angular/core';
import { FsApi } from '@firestitch/api';
import { FS_PROGRESS_DISABLE } from '@firestitch/progress';


@Component({
  selector: 'example',
  templateUrl: 'example.component.html',
  styles: [
    `button + button {
      margin-left: 5px;
    }`
  ]
})
export class ExampleComponent {

  public constructor(
    private _api: FsApi
  ) {}

  public test(progress) {
    this._api.post('https://specify.dev.firestitch.com/api/dummy', { 
      sleep: 3,      
     }, 
     {
      context: progress ? null : new HttpContext().set(FS_PROGRESS_DISABLE, true),
     })
    .subscribe(() =>  {

    });
  }
}
