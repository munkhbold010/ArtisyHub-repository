import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon.component';
import { DownloadComponent } from './download.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    IconComponent,
    DownloadComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    IconComponent,
    DownloadComponent,

  ]
})
export class SharedModule { }
