import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FsApiModule } from '@firestitch/api';
import { FsProgressModule } from '@firestitch/progress';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { provideRouter, Routes } from '@angular/router';
import { ExamplesComponent } from './app/components';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
];



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FsApiModule.forRoot(), FsProgressModule.forRoot(), FormsModule, FsExampleModule.forRoot(), FsMessageModule.forRoot()),
        provideAnimations(),
        provideRouter(routes),
    ]
})
  .catch(err => console.error(err));

