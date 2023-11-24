import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grandchild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grandchild.component.html',
  styleUrl: './grandchild.component.scss'
})
export class GrandchildComponent {

}
