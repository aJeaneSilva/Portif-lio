import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  profileImage =
    'img/fotodejeane.jpg';
}
