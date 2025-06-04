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
    comment: 'Хайртай уран бүтээлчээ ямар ч дундын зуучлалгүй захиалах боломжтой болсон. Бүх юм нь ил тод, найдвартай.  Хүмүүс энэ тэндээс хөтлөгч, дуучдын утасны дугаарыг нь хайгаад л эсвэл чат руу нь мессеж бичдэг  түргэн шуурхай хариу өгч чаддаггүй асуудлыг бүрэн шийдсэн мэт санагдсан. Хамгийн гол нь хүмүүсийн цаг хугацааг маш ихээр хэмнэж байгаа нь туйлын их таалагдсан.',
  },
  {
    name: 'Танхай ерөөлч',
    image: 'assets/artists/tanhai.jpg',
    comment: 'Уран бүтээлч захиалагч нарын гүүр болсон үнэхээр сайхан аппликейшн.',
  },
  {
    name: 'Namone',
    image: 'assets/artists/namone.png',
    comment: 'Монголын урлагийн салбарт үнэхээр дутагдаж байсан зүйл бөгөөд “ArtisyHub”-н хамт олондоо талархаж байна. Уран бүтээлчидтэй холбоо барих, урлагийн үйлчилгээг Хэрхэн? Яаж? холбогдон авахаа мэдэхгүй хүн бүхэнд хэрэгтэй аппликейшн учраас ашиглаж хэвшээрэй гэж уриалмаар байна.',
  },
  {
    name: 'Агиймаа',
    image: 'assets/artists/aagiimaa.jpg',
    comment: 'Санхүүгийн мэдээлэл нь ил тод. Бид ч бас өөрсдийн үнэ, мэдээллээ давхар хянаад явах боломжтой. Бидний өмнөөс ибаримт шууд шивж байгаа нь үнэхээр таалагдсан.',
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
    comment: 'Би шинэ жилээр хэдэн захиалга авсан үнэхээр амар, найдвартай юм байна лээ. Арга хэмжээ дуусаад захиалагч нэг товч дарахад л төлбөр шууд орж ирээд. ARTISYHUB аппликейшнд нийт уран бүтээлчдийн өмнөөс баярласан талархсанаа илэрхийлье. Цаашдын ажил хөдөлмөрт нь өндөр амжилт хүсье.Та бүхнийг энэ аппликейшнээр дамжуулан захиалга хийж хэвшээрэй гэж уриалж байна.',
  },
  {
    name: 'Хөтлөгч Боки',
    image: 'assets/artists/boogii.png',
    comment: '“ArtisyHub” аппликэйшн уран бүтээлч, захиалагчийн дунд зуучлагчийн шаардлагагүйгээр харилцах, тохиролцох тун аятай боломж юм. Хамгийн гол нь цаг хугацаа алдахгүй харилцаж болдог нь үнэхээр таалагдсан.Туршаад үзээрэй гэж зөвлөх байна.',
  },
  {
    name: 'Ихэрсувд',
    image: 'assets/artists/iher.png',
    comment: 'Энэ аппликейшн маш их таалагдаж байгаа. Дуулсны дараа шууд төлбөр нь орж ирдэг албан ёсны, найдвартай платформ санагдсан.Хүн бүрийг энэ “ArtisyHub” аппликейшныг хэрэглэж хэвшээрэй гэж уриалмаар байна.',
  },
  {
    name: 'YoungSub',
    image: 'assets/artists/yongsub.jpg',
    comment: 'Энэ аппликейшн бол өнөөгийн уламжлалт төвөгтэй уран бүтээлчдийг захиалдаг системийг цогцоор нь  шийдэж чадсан.“ArtisyHub” аппликейшнээр уран бүтээлчдээ захиалж хэвшээрэй гэж уриалъя.',
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