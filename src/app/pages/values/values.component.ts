import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/directives/reveal-on-scroll.directive';

interface CoreValue {
  code: string;
  title: string;
  description: string;
  accent: 'cyan' | 'purple';
}

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './values.component.html',
  styleUrl: './values.component.css'
})
export class ValuesComponent {
  values: CoreValue[] = [
    {
      code: '01 // Tecnologias',
      title: 'Linguagens & Stack',
      description: 'Domínio em HTML5, CSS3, JavaScript, TypeScript e ecossistema Angular. Foco em código limpo, moderno e de alta performance.',
      accent: 'cyan'
    },
    {
      code: '02 // DESIGN & UI',
      title: 'Interface & Experiência',
      description: 'Criação de interfaces visuais atraentes, intuitivas e responsivas, unindo boa usabilidade (UX) ao design focado em conversão.',
      accent: 'purple'
    },
    {
      code: '03 // PROCESSO',
      title: 'Agilidade & Entrega',
      description: 'Metodologias ágeis para prototipagem rápida, organização de rotina e entregas eficientes sem comprometer a qualidade.',
      accent: 'cyan'
    },
    {
      code: '04 // EVOLUÇÃO',
      title: 'Visão Global',
      description: 'Em constante aperfeiçoamento profissional — unindo aprendizado de novos idiomas (Inglês/Alemão) e tendências do mercado tech.',
      accent: 'purple'
    }
  ];
}
