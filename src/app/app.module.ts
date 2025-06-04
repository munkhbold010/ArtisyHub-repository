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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    AdvantageComponent,
    AboutUsComponent,
    NewsComponent,
    DetailComponent,

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
