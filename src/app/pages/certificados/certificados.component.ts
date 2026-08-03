import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/directives/reveal-on-scroll.directive';

export interface Certificados {
  id: string;
  title: string;
  image: string;
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
  { id: 'cert-1', title: 'Conhecimentos sobre LGPD', image: '/img/alura-lgpd.png' },
  { id: 'cert-2', title: 'Fundamentos de Inteligência Artificial', image: '/img/dio-ia.png' },
  { id: 'cert-3', title: 'Certificado - Workshop online', image: '/img/ebac-figma.png' },
  { id: 'cert-4', title: 'Gestão do Google Para Empresas', image: '/img/mdg.png' }
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