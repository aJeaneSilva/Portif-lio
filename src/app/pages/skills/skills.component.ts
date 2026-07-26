import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  visionImage =
    'https://lh3.googleusercontent.com/aida/AP1WRLuRukG42fNLE40OghpoyJBOnJgjxQBg0tyyXlTdielaR3sk0t6H__t5nmAbV77B5pJloQqp5fETkvM05VPYuYJnfEkNGOcHe47c4BkhxYOj7-xQuUYrb4EKGsnJrHbYxpenfXqubYkmrAUTakjoNNQxgeyApM48eU2SkhAcE77lX0c_1jDmR-C5qRD4MbdyakV_-NzZu4cmZnjMrQGs3lAunpcyq9KfU7RzeoVU6xvFKVDck7ZWyl0xOhk';
}
