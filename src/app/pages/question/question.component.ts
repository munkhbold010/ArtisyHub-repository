import { Component } from '@angular/core';
import { FAQS } from '../../shared/content';
@Component({selector: 'app-question', templateUrl: './question.component.html', styleUrls: ['./question.component.scss']})
export class QuestionComponent { readonly faqs = FAQS; }
