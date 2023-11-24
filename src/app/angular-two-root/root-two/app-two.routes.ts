import { Routes } from '@angular/router';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { GrandchildComponent } from '../../app/grandchild/grandchild.component';
import { GrandchildTwoComponent } from '../../app/grandchild-two/grandchild-two.component';

export const routesTwo: Routes = [
  {
    title: 'Angular Two',
    path: '',
    children: [
      {
        path: 'a-two',
            component: ChildComponentComponent,
        children: [
          {
            path: 'first',
            component: GrandchildComponent
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
