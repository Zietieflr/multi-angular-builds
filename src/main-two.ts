import { bootstrapApplication } from '@angular/platform-browser';
import { RootTwoComponent } from './app/angular-two-root/root-two/root-two.component';
// import { appConfig } from './app/app.config';

bootstrapApplication(RootTwoComponent)
  .catch((err) => console.error(err));
