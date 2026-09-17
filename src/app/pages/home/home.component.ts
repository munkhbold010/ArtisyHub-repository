import { Component } from '@angular/core';
import { ARTISTS, FAQS, NEWS } from '../../shared/content';
@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent {
  readonly categories = ['Бүгд', 'Дуучин', 'Хөтлөгч', 'Хамтлаг', 'Комедиан'];
  selectedCategory = 'Бүгд';
  readonly news = NEWS.slice(0, 3);
  readonly faqs = FAQS.slice(0, 3);
  get artists() { return ARTISTS.filter(a => this.selectedCategory === 'Бүгд' || a.category === this.selectedCategory); }
}
