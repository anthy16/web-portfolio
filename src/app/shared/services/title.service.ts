import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  titlePostfix: string = 'Anders KT - Technical Lead';

  constructor(private title: Title) {}

  setPageTitle(route: string): void {
    switch (route) {
      case 'home':
        this.title.setTitle(`Home | ${this.titlePostfix}`);
        return;
      case 'projects':
        this.title.setTitle(`Projects | ${this.titlePostfix}`);
        return;
      case 'contact':
        this.title.setTitle(`Contact | ${this.titlePostfix}`);
        return;
      default:
        this.title.setTitle(`${this.titlePostfix}`);
    }
  }
}
