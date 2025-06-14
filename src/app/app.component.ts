import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';
  isNavbarOpen = false;

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit(): void {
    initFlowbite();

    // Хуудасны гарчиг (title) тохируулах
    this.titleService.setTitle("ArtisyHub - Хөтлөгч, дуучин, уран бүтээлчдийн захиалгын платформ");

    // Meta description тохируулах
    this.meta.updateTag({
      name: 'description',
      content: 'ArtisyHub бол бүх төрлийн уран бүтээлчдийг хамгийн хялбараар захиалах боломжтой Монголын хамгийн анхны шилдэг платформ юм.'
    });
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
