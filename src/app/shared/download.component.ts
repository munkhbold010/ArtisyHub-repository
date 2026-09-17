import { Component } from '@angular/core';
import { APP_LINKS } from './content';
@Component({selector: 'app-download', template: `
<section class="download-section" id="download" aria-labelledby="download-title"><div class="container download-layout">
  <div class="download-copy"><p class="eyebrow">ТАНЫ ДАРААГИЙН ОНЦГОЙ МӨЧ</p><h2 id="download-title">Ганцхан апп.<br>Маш олон боломж.</h2><p>Хүссэн уран бүтээлчээ ArtisyHub-ээс.<br>Аппаа татаад, арга хэмжээгээ төлөвлөөрэй.</p>
    <div class="store-links"><a [href]="links.apple" target="_blank" rel="noopener noreferrer" aria-label="ArtisyHub-ийг App Store-оос татах"><img src="assets/logo/appstore.png" alt="App Store" width="176" height="51" loading="lazy"></a><a [href]="links.google" target="_blank" rel="noopener noreferrer" aria-label="ArtisyHub-ийг Google Play-ээс татах"><img src="assets/logo/playstore.png" alt="Google Play" width="176" height="51" loading="lazy"></a></div>
    <p class="download-small">iOS болон Android · Үнэгүй татах</p>
  </div>
  <img class="download-mockup" src="assets/mokup/Mockup2.png" alt="ArtisyHub аппликейшний уран бүтээлч сонгох дэлгэц" width="910" height="1019" loading="lazy">
</div></section>`})
export class DownloadComponent { readonly links = APP_LINKS; }
