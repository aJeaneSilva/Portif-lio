import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/directives/reveal-on-scroll.directive';

export interface Certificados {
  id: string;
  title: string;
  image: string;
  vertical?: boolean;
}

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {

  certificates: Certificados[] = [
    { id: 'cert-1', title: 'Conhecimentos sobre LGPD', image: '/img/lgpd.png' },
    { id: 'cert-2', title: 'Fundamentos de Inteligência Artificial', image: '/img/dio-ia.png' },
    { id: 'cert-3', title: 'Desenvolvedora Front-End', image: '/img/front.jpeg', vertical: true },
    { id: 'cert-4', title: 'Desenvolvedora Back-End (Em breve)', image: '/img/back.jpeg', vertical: true },

    { id: 'cert-5', title: 'Conhecimentos sobre Scrum', image: '/img/scrum.png' },
    { id: 'cert-6', title: 'TypeScript na prática', image: '/img/type.png' },
    { id: 'cert-7', title: 'Git e GitHub', image: '/img/githubcert.png' },
    { id: 'cert-8', title: 'Engenharia de prompt', image: '/img/promptia.png' },

    { id: 'cert-9', title: 'Oficina de preparação integral para o mundo do trabalho', image: '/img/redec.png' },
    { id: 'cert-10', title: 'Workshop online', image: '/img/ebac-figma.png' },
    { id: 'cert-11', title: 'Gestão do Google Para Empresas', image: '/img/mdg.png' },
    { id: 'cert-12', title: 'Dominando o editor de planilhas', image: '/img/excel.png' },
    { id: 'cert-13', title: 'Comunicação eficiente nos negócios', image: '/img/comunicacao.png' },
    { id: 'cert-14', title: 'Habilidades de negociação', image: '/img/negociacoes.png' }
  ];

  get loopedCertificates(): Certificados[] {
    return [...this.certificates, ...this.certificates];
  }

  selected: Certificados | null = null;

  open(cert: Certificados): void {
    this.selected = cert;
  }

  close(): void {
    this.selected = null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}