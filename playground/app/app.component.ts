import { Component } from '@angular/core';
import { FsProgressComponent } from '../../src/app/components/progress/progress.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [FsProgressComponent, RouterOutlet]
})
export class AppComponent {
}
