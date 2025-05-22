import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('userCountEl') userCountEl!: ElementRef;
  @ViewChild('artistCountEl') artistCountEl!: ElementRef;
  
  testimonials = [
  {
    name: 'Сэрчмаа',
    image: 'assets/artists/selly.jpg',
    comment: 'Уран бүтээлчээ шууд захиалах боломжтой болсон үнэхээр захиалагч, уран бүтээлч аль алинд нь хэрэгтэй апп байна.',
  },
  {
    name: 'Танхай ерөөлч',
    image: 'assets/artists/tanhai.jpg',
    comment: 'Уран бүтээлч захиалагч нарын гүүр болсон үнэхээр сайхан аппликейшн.',
  },
  {
    name: 'Агиймаа',
    image: 'assets/artists/aagiimaa.jpg',
    comment: 'Санхүүгийн мэдээлэл нь ил тод. Бид ч бас өөрсдийн үнэ, мэдээллээ давхар хянаад явах боломжтой.',
  },
  {
    name: 'Ууганаа',
    image: 'assets/artists/uugnaa.jpg',
    comment: 'Аппликейшны хамт олонд өндрөөс өндөр амжилт хүсье. Мундаг',
  },
  {
    name: 'Лхагва /Мөнхийн реп/',
    image: 'assets/artists/Lhgwa.jpg',
    comment: 'Уран бүтээлчдэд үнэхээр хэрэгтэй аппликейшн болсон. Захиалга авахад маш хялбар.',
  },
  {
    name: 'Мөөгий /Татар/',
    image: 'assets/artists/tatar.jpg',
    comment: 'Анх санаа байхаас нь хойш дэмжсэн. Үүсгэн байгуулагч нь асуудлаа маш сайн олж харсан байсан.  Энэхүү аппын гол зорилго нь захиалагч, уран бүтээлчдийн одоогийн хэрэглэгчид уран бүтээлчдийн утас хайхаас эхлүүлээд олон асуудлуудыг маш сайн шийдсэн, ил тод, найдвартай. Та бүхэн албан ёсны платформоор дамжуулан захиалгаа өгч байгаарай. Манай хамтлаг болон маш олон уран бүтээлчид энэ платформд нэгдсэн байгаа.',
  },
  {
    name: 'Бээгий',
    image: 'assets/artists/beegii.jpg',
    comment: 'Би шинэ жилээр хэдэн захиалга авсан үнэхээр амар, найдвартай юм байна лээ. Арга хэмжээ дуусаад шууд л мөнгө нь ороод ирсэн. NICE',
  },
  {
    name: 'YoungSub',
    image: 'assets/artists/yongsub.jpg',
    comment: 'Үнэхээр супер аппликейшн шүү.',
  }
];


  ngAfterViewInit() {
    this.animateCount(this.userCountEl.nativeElement, 35895, 1500);
    this.animateCount(this.artistCountEl.nativeElement, 322, 1500);
  }

  animateCount(el: HTMLElement, target: number, duration: number) {
    let start = 0;
    const increment = target / (duration / 5);
    function update() {
      start += increment;
      if (start < target) {
        el.textContent ='+' + Math.floor(start).toString();
        requestAnimationFrame(update);
      } else {
        el.textContent ='+' + target.toString();
      }
    }
    update();

    
  }
}