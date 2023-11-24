import { Routes } from '@angular/router';
import { ChildComponentComponent } from './angular-two-root/child-component/child-component.component';
import { GrandchildComponent } from './app/grandchild/grandchild.component';
import { GrandchildTwoComponent } from './app/grandchild-two/grandchild-two.component';

export const routes: Routes = [
  {
    title: 'Angular One',
    path: '',
    children: [
      {
        path: 'a-one',
            component: ChildComponentComponent,
        children: [
          {
            path: 'first',
            component: GrandchildComponent,
          },
          {
            path: 'second',
            component: GrandchildTwoComponent,
          }
        ]
      }
    ]
  }
];
