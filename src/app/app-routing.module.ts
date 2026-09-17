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
    title: "ArtisyHub — Хүссэн уран бүтээлчээ захиалаарай",
    component: HomeComponent,
  },
  {
    path: "news",
    title: "Мэдээ, нийтлэл | ArtisyHub",
    component: NewsComponent,
  },
  {
    path: "news/news1",
    title: "2024 оны онцлох уран бүтээлчид | ArtisyHub",
    component: DetailComponent,
  },
  {
    path: "news/news2",
    title: "Хөтлөгч сонгох 3 алхам | ArtisyHub",
    component: Detail1Component,
  },
  {
    path: "news/news3",
    title: "Хуримын энтертайнмент | ArtisyHub",
    component: Detail2Component,
  },
  {
    path: "news/news4",
    title: "Аппаар захиалах давуу тал | ArtisyHub",
    component: Detail3Component,
  },
  {
    path: "news/news5",
    title: "Ил тод үнэ, баталгаатай захиалга | ArtisyHub",
    component: Detail4Component,
  },
  {
    path: "news/news6",
    title: "Хэрэглэгчийн сэтгэгдэл | ArtisyHub",
    component: Detail5Component,
  },
  {
    path: "advantage",
    title: "Давуу тал | ArtisyHub",
    component: AdvantageComponent,
  },
  {
    path: "question",
    title: "Асуулт, хариулт | ArtisyHub",
    component: QuestionComponent,
  },
  {
    path: "about-us",
    title: "Бидний тухай | ArtisyHub",
    component: AboutUsComponent,
  },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: window.location.protocol === "file:", scrollPositionRestoration: "enabled", anchorScrolling: "enabled", scrollOffset: [0, 104] })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
