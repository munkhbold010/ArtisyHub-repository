import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdvantageComponent } from './pages/advantage/advantage.component';
import { QuestionComponent } from './pages/question/question.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NewsComponent } from './pages/news/news.component';
import { DetailComponent } from './pages/detail/detail.component';



const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component: HomeComponent
  },
{
  path:'news', component: NewsComponent
},
{
     path: 'news/news1', component: DetailComponent  
},
  {
    path:'advantage', component: AdvantageComponent
  },
  {
    path:'question', component: QuestionComponent
  },
  {
    path:'about-us', component: AboutUsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
