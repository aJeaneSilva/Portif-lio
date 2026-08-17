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
      code: '02 // DESIGN & MÍDIA',
      title: 'Interface & Audiovisual',
      description: 'Desenvolvimento de interfaces funcionais e focadas na experiência do usuário. Complemento minha visão criativa praticando fotografia e edição de vídeo no tempo livre.',
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
      title: 'Visão Global & Idiomas',
      description: 'Inglês em nível intermediário e estudos em andamento no idioma alemão. Mantenho o foco na busca contínua pelas melhores práticas e tendências do mercado de tecnologia.',
      accent: 'purple'
    }
  ];
}