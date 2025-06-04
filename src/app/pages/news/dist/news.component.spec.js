"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var news_component_1 = require("./news.component");
describe('NewsComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [news_component_1.NewsComponent]
        });
        fixture = testing_1.TestBed.createComponent(news_component_1.NewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
