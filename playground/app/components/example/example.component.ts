import { Component } from '@angular/core';
import { FsApi } from '@firestitch/api';


@Component({
  selector: 'example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent {

  public constructor(private fsApi: FsApi) {

  }

  public test() {
    this.fsApi.post('https://specify.dev.firestitch.com/api/dummy', { sleep: 5 })
    .subscribe(() =>  {

    });
  }
}
