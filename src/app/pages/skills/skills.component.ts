import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../shared/directives/reveal-on-scroll.directive';

interface Slide {
  img: string;
  category: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private autoSlideInterval: any;

  slides: Slide[] = [
    {
      img: 'img/foto-grupo.jpg',
      category: 'TECNOLOGIA E INOVAÇÃO',
      title: 'Visita ao CIMATEC PARK',
      description: 'Foto em grupo da turma do programa Ford Enter durante visita técnica ao SENAI CIMATEC PARK.'
    },
    {
      img: 'img/foto-2.jpg',
      category: 'APRENDIZADO & PRÁTICA',
      title: 'Meu primeiro site - Projeto da Ford Enter',
      description: 'Desenvolvimento do primeiro site responsivo utilizando HTML, CSS e JavaScript, aplicando boas práticas de programação e design.'
    },
    {
      img: 'img/foto-3.png',
      category: 'NETWORKING',
      title: 'Boas-vindas a nova turma de Front-End',
      description: 'Tive a oportunidade de trocar experiências durante a integração da nova turma de desenvolvedores Front-end no SENAI CIMATEC.'
    },
    {
      img: 'img/foto-4.jpg',
      category: 'MARKETING DIGITAL & UGC',
      title: 'Criação de Conteúdo',
      description: 'Bastidores da produção de vídeos com foco em engajamento e conversão de marcas.'
    },
    {
      img: 'img/foto-5.jpg',
      category: 'CÓDIGO & PERFORMANCE',
      title: 'Meu primeiro site',
      description: 'Aplicação prática de interfaces modernas utilizando HTML, CSS, TypeScript e Angular.'
    },
    {
      img: 'img/foto-6.jpg',
      category: 'TRABALHO EM EQUIPE',
      title: 'Projetos Colaborativos',
      description: 'Desenvolvimento em time aplicando metodologias ágeis e boas práticas de software.'
    },
    {
      img: 'img/foto-7.jpeg',
      category: 'ENCONTRO DE ENCERRAMENTO',
      title: 'Ford<Enter>',
      description: 'Dia do encerramento do programa de formação técnica em Front-end.'
    }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000);
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.startAutoSlide(); // Reinicia a contagem dos 3s após a interação
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.startAutoSlide(); 
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.startAutoSlide(); 
  }
}