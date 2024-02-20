import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FsApiModule } from '@firestitch/api';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { FsProgressModule } from '@firestitch/progress';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExampleComponent, ExamplesComponent } from './components';
import { AppMaterialModule } from './material.module';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
];


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FsApiModule.forRoot(),
        FsProgressModule.forRoot({ barColor: 'pink' }),
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        FsExampleModule.forRoot(),
        FsMessageModule.forRoot(),
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    ],
    declarations: [
        AppComponent,
        ExamplesComponent,
        ExampleComponent,
    ],
    providers: []
})
export class PlaygroundModule {
}
