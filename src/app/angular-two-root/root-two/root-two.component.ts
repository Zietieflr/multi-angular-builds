import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root-two',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './root-two.component.html',
  styleUrl: './root-two.component.scss'
})
export class RootTwoComponent {}
