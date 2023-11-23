import { bootstrapApplication } from '@angular/platform-browser';
import { RootTwoComponent } from './app/angular-two-root/root-two/root-two.component';
import { appTwoConfig } from './app/angular-two-root/root-two/app-two.config';

bootstrapApplication(RootTwoComponent, appTwoConfig)
  .catch((err) => console.error(err));
