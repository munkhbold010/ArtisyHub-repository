"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./pages/home/home.component");
var advantage_component_1 = require("./pages/advantage/advantage.component");
var question_component_1 = require("./pages/question/question.component");
var about_us_component_1 = require("./pages/about-us/about-us.component");
var news_component_1 = require("./pages/news/news.component");
var detail_component_1 = require("./pages/detail/detail.component");
var detail1_component_1 = require("./pages/detail1/detail1.component");
var detail2_component_1 = require("./pages/detail2/detail2.component");
var detail3_component_1 = require("./pages/detail3/detail3.component");
var detail4_component_1 = require("./pages/detail4/detail4.component");
var detail5_component_1 = require("./pages/detail5/detail5.component");
var routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: home_component_1.HomeComponent
    },
    {
        path: "news",
        component: news_component_1.NewsComponent
    },
    {
        path: "news/news1",
        component: detail_component_1.DetailComponent
    },
    {
        path: "news/news2",
        component: detail1_component_1.Detail1Component
    },
    {
        path: "news/news3",
        component: detail2_component_1.Detail2Component
    },
    {
        path: "news/news4",
        component: detail3_component_1.Detail3Component
    },
    {
        path: "news/news5",
        component: detail4_component_1.Detail4Component
    },
    {
        path: "news/news6",
        component: detail5_component_1.Detail5Component
    },
    {
        path: "advantage",
        component: advantage_component_1.AdvantageComponent
    },
    {
        path: "question",
        component: question_component_1.QuestionComponent
    },
    {
        path: "about-us",
        component: about_us_component_1.AboutUsComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
