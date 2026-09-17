import { Component } from '@angular/core';
import { NEWS } from '../../shared/content';
@Component({selector: 'app-news', templateUrl: './news.component.html', styleUrls: ['./news.component.scss']})
export class NewsComponent { readonly news = NEWS; }
