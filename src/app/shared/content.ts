// Editorial selection from the supplied repository, not a live availability feed.
export const ARTISTS = [
  { name: 'Агиймаа', category: 'Дуучин', image: 'assets/artists/aagiimaa.jpg' },
  { name: 'Ууганаа', category: 'Хөтлөгч', image: 'assets/artists/uugnaa.jpg' },
  { name: 'Татар', category: 'Хамтлаг', image: 'assets/artists/tatar.png' },
  { name: 'YoungSub', category: 'Дуучин', image: 'assets/artists/yongsub.jpg' },
  { name: 'Сэрчмаа', category: 'Дуучин', image: 'assets/artists/selly.jpg' },
  { name: 'Боки', category: 'Хөтлөгч', image: 'assets/artists/boogii.png' },
  { name: 'Бээгий', category: 'Комедиан', image: 'assets/artists/beegii.jpg' },
  { name: 'Мөнхийн реп', category: 'Хамтлаг', image: 'assets/artists/Lhgwa.jpg' }
];
export const APP_LINKS = {
  apple: 'https://apps.apple.com/kr/app/artisyhub/id6642690974?l=en-GB',
  google: 'https://play.google.com/store/apps/details?id=mn.io.artisy&hl=en'
};
export const NEWS = [
  { path: '/news/news2', image: 'assets/info/info2.png', category: 'ЗӨВЛӨГӨӨ', title: 'Таны арга хэмжээнд тохирох хөтлөгчийг сонгох 3 алхам' },
  { path: '/news/news3', image: 'assets/info/info3.png', category: 'ХУРИМ', title: 'Хуримынхаа энтертайнментийг яаж зохион байгуулах вэ?' },
  { path: '/news/news5', image: 'assets/info/info5.png', category: 'ТӨЛБӨР, БАТАЛГАА', title: 'Ил тод үнэ, баталгаатай захиалга гэж юу вэ?' },
  { path: '/news/news1', image: 'assets/info/info1.png', category: '2024 ОНЫ ОНЦЛОХ', title: '2024 оны хамгийн олон захиалга авсан 5 уран бүтээлч' },
  { path: '/news/news4', image: 'assets/info/info4.png', category: 'ЗАХИАЛГА', title: 'Аппаар захиалга хийх нь таньдаг хүнээр дамжуулж захиалахаас юугаараа давуу вэ?' },
  { path: '/news/news6', image: 'assets/info/info6.png', category: 'ТУРШЛАГА', title: 'ArtisyHub апп ашиглан захиалга хийсэн хэрэглэгчийн сэтгэгдэл' }
];
export interface Faq { question: string; answer: string; points?: string[]; }
// Existing business policies are preserved from the original question page.
export const FAQS: Faq[] = [
  { question: 'Хэрхэн уран бүтээлчээр бүртгүүлэх вэ?', answer: 'Та манай лавлах утас 88979121, 60109810 болон ArtisyHub фейсбүүк пейж хуудастай холбогдож, гэрээ байгуулан уран бүтээлчээр бүртгүүлэх боломжтой.' },
  { question: 'Захиалагчаас шимтгэл авдаг уу?', answer: 'Бид захиалагч талаас ямар ч шимтгэл авдаггүй.' },
  { question: 'Уран бүтээлч арга хэмжээнд ирэхгүй бол яах вэ?', answer: 'Бид таны захиалгын төлбөрийг 100% буцаан олгохоос гадна тухайн уран бүтээлчид арга хэмжээ авна.' },
  { question: 'Уран бүтээлч хоцорч ирвэл яах вэ?', answer: 'Та уран бүтээлчтэй харилцан тохиролцож үйлчилгээгээ авч болно. Эсвэл уран бүтээлчийн үйлчилгээг авахаас татгалзаж болно. Татгалзсан тохиолдолд таны захиалгын төлбөрийг 100% буцаан олгоно.' },
  { question: 'Захиалгаа цуцалж болох уу?', answer: 'Болно. Захиалгаа хэзээ цуцлахаас хамаарч дараах шимтгэлийг захиалсан уран бүтээлчид төлнө.', points: [
    'Арга хэмжээ болохоос 7-оос дээш хоногийн өмнө цуцалбал захиалгын төлбөрийн 5%.',
    'Арга хэмжээ болохоос 3–7 хоногийн өмнө цуцалбал захиалгын төлбөрийн 20%.',
    'Арга хэмжээ болохоос 24–72 цагийн өмнө цуцалбал захиалгын төлбөрийн 50%.',
    'Арга хэмжээ болохоос 24 цагийн дотор цуцалбал захиалгын төлбөрийн 80%.'
  ] },
  { question: 'ArtisyHub-тэй хэрхэн холбогдох вэ?', answer: 'Лавлах утас: 88979121, 60109810. Имейл: info@artisyhub.mn. Хаяг: Хан-Уул дүүрэг, Рома хотхон, InnoHub. Мөн ArtisyHub фейсбүүк пейж хуудсаар холбогдоорой.' }
];
