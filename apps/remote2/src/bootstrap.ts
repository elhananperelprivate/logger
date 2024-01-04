import { bootstrapApplication } from '@angular/platform-browser';
import { RemoteEntryComponent } from './app/remote-entry/entry.component';
import { appConfig } from './app/app.config';

bootstrapApplication(RemoteEntryComponent, appConfig).catch((err) =>
  console.error(err)
);
