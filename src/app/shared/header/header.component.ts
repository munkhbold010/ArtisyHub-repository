import { Component, HostListener } from '@angular/core';
@Component({selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.scss']})
export class HeaderComponent {
  isNavbarOpen = false;
  toggleNavbar() { this.isNavbarOpen = !this.isNavbarOpen; }
  closeNavbar() { this.isNavbarOpen = false; }
  @HostListener('document:keydown.escape') onEscape() { this.closeNavbar(); }
}
