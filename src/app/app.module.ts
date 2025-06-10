import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { QuestionComponent } from './pages/question/question.component';
import { AdvantageComponent } from './pages/advantage/advantage.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NewsComponent } from './pages/news/news.component';
import { DetailComponent } from './pages/detail/detail.component';
import { Detail1Component } from './pages/detail1/detail1.component';
import { Detail2Component } from './pages/detail2/detail2.component';
import { Detail3Component } from './pages/detail3/detail3.component';
import { Detail4Component } from './pages/detail4/detail4.component';
import { Detail5Component } from './pages/detail5/detail5.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    AdvantageComponent,
    AboutUsComponent,
    NewsComponent,
    DetailComponent,
    Detail1Component,
    Detail2Component,
    Detail3Component,
    Detail4Component,
    Detail5Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
