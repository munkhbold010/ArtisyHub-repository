import { Component, Input } from '@angular/core';
const PATHS: Record<string, string[]> = {
  'arrow-right': ['M5 12h14', 'm12 5 7 7-7 7'],
  'arrow-up-right': ['M7 17 17 7', 'M7 7h10v10'],
  music: ['M9 18V5l12-2v13', 'M9 18a3 3 0 1 1-3-3c1.7 0 3 1.3 3 3', 'M21 16a3 3 0 1 1-3-3c1.7 0 3 1.3 3 3'],
  shield: ['M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11', 'm9 12 2 2 4-4'],
  calendar: ['M8 2v4M16 2v4', 'M3 10h18', 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2'],
  receipt: ['M4 3v19l4-2 4 2 4-2 4 2V3l-4 2-4-2-4 2-4-2', 'M8 10h8M8 14h6'],
  download: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M12 3v12', 'm7 10 5 5 5-5'],
  search: ['M21 21l-6-6', 'M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0'],
  send: ['m22 2-7 20-4-9-9-4Z', 'M22 2 11 13'],
  check: ['m5 12 4 4L19 6'],
  play: ['m9 5 11 7-11 7Z'],
  plus: ['M12 5v14M5 12h14'],
  menu: ['M4 6h16M4 12h16M4 18h16'],
  close: ['m6 6 12 12M6 18 18 6'],
  phone: ['M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z'],
  mail: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2', 'm22 6-10 7L2 6'],
  clock: ['M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0', 'M12 6v6l4 2'],
  users: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0', 'M22 21v-2a4 4 0 0 0-3-3.9', 'M16 3.1a4 4 0 0 1 0 7.8']
};
@Component({selector: 'app-icon', template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path *ngFor="let d of paths" [attr.d]="d" /></svg>', styles: [':host{display:inline-flex;width:1.35em;height:1.35em;flex-shrink:0;vertical-align:middle}svg{width:100%;height:100%}']})
export class IconComponent {
  @Input() name = 'arrow-right';
  get paths() { return PATHS[this.name] || PATHS['arrow-right']; }
}
