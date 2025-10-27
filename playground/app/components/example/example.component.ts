import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsApi } from '@firestitch/api';
import { FS_PROGRESS_DISABLE } from '@firestitch/progress';

import { HttpContext } from '@angular/common/http';
import { MatButton } from '@angular/material/button';


@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `button + button {
      margin-left: 5px;
    }`,
    ],
    standalone: true,
    imports: [MatButton],
})
export class ExampleComponent {

  constructor(
    private _api: FsApi,
  ) {}

  public test(progress) {
    this._api.post('https://specify.firestitch.dev/api/dummy', { 
      sleep: 3,      
    }, 
    {
      context: progress ? null : new HttpContext().set(FS_PROGRESS_DISABLE, true),
    })
      .subscribe();
  }
}
