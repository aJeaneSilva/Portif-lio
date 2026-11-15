import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  menuOpen = false;
  activeId = 'home';

  links: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'História' },
    { id: 'skills', label: 'Projetos' },
    { id: 'certifications', label: 'Certificados' },
    { id: 'values', label: 'Ferramentas' }

  ];

  private sectionIds = [...this.links.map(l => l.id), 'contact'];

  private readonly offset = 160;

  ngAfterViewInit(): void {
    setTimeout(() => this.updateActive());
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActive();
  }

  private updateActive(): void {
    let current = this.sectionIds[0];

    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= this.offset) {
        current = id;
      }
    }

// Quando chega ao final da página, marca a última seção.
    const reachedBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
    if (reachedBottom) {
      current = this.sectionIds[this.sectionIds.length - 1];
    }

    this.activeId = current;
  }
}