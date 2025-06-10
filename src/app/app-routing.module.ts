import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AdvantageComponent } from "./pages/advantage/advantage.component";
import { QuestionComponent } from "./pages/question/question.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { NewsComponent } from "./pages/news/news.component";
import { DetailComponent } from "./pages/detail/detail.component";
import { Detail1Component } from "./pages/detail1/detail1.component";
import { Detail2Component } from "./pages/detail2/detail2.component";
import { Detail3Component } from "./pages/detail3/detail3.component";
import { Detail4Component } from "./pages/detail4/detail4.component";
import { Detail5Component } from "./pages/detail5/detail5.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "news",
    component: NewsComponent,
  },
  {
    path: "news/news1",
    component: DetailComponent,
  },
  {
    path: "news/news2",
    component: Detail1Component,
  },
  {
    path: "news/news3",
    component: Detail2Component,
  },
  {
    path: "news/news4",
    component: Detail3Component,
  },
  {
    path: "news/news5",
    component: Detail4Component,
  },
  {
    path: "news/news6",
    component: Detail5Component,
  },
  {
    path: "advantage",
    component: AdvantageComponent,
  },
  {
    path: "question",
    component: QuestionComponent,
  },
  {
    path: "about-us",
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
