import { IProduct } from '@/types/product'

import venus from '@/assets/img/venus.jpg'
import venus1 from '@/assets/img/venus-1.jpg'
import venus2 from '@/assets/img/venus-2.jpg'

import lastSupper from '@/assets/img/last-supper.jpg'
import lastSupper1 from '@/assets/img/last-supper-1.jpg'
import lastSupper2 from '@/assets/img/last-supper-2.jpg'

import adam from '@/assets/img/adam.jpg'
import adam1 from '@/assets/img/adam-1.jpg'
import adam2 from '@/assets/img/adam-2.jpg'

import anatomy from '@/assets/img/anatomy.jpg'
import anatomy1 from '@/assets/img/anatomy-1.jpg'
import anatomy2 from '@/assets/img/anatomy-2.jpg'

export const PRODUCTS: IProduct[] = [
  {
    id: 'venus',
    title: '«Рождение Венеры» Сандро Боттичелли',
    price: 1000000,
    oldPrice: 2000000,
    description:
      'Темпера, холст, 172 × 278 см. Около 1485 года. Венера изображена выходящей из моря на раковине. Хранится в галерее Уффици во Флоренции.',
    images: [venus, venus1, venus2]
  },
  {
    id: 'last-supper',
    title: '«Тайная вечеря» Леонардо да Винчи',
    price: 3000000,
    description:
      'Роспись стены трапезной монастыря Санта-Мария-делле-Грацие в Милане, 1495–1498 годы. Размер 460 × 880 см. Изображён момент, когда Христос говорит апостолам о предательстве.',
    images: [lastSupper, lastSupper1, lastSupper2]
  },
  {
    id: 'adam',
    title: '«Сотворение Адама» Микеланджело',
    price: 5000000,
    oldPrice: 6000000,
    description:
      'Фреска потолка Сикстинской капеллы в Ватикане, около 1511 года. Размер 280 × 570 см. Одна из девяти центральных композиций на сюжеты книги Бытия.',
    images: [adam, adam1, adam2]
  },
  {
    id: 'anatomy',
    title: '«Урок анатомии» Рембрандт',
    price: 2000000,
    isSold: true,
    description:
      'Холст, масло, 169,5 × 216,5 см. 1632 год. Групповой портрет амстердамской гильдии хирургов, заказанный доктором Николасом Тюльпом. Хранится в Маурицхёйсе в Гааге.',
    images: [anatomy, anatomy1, anatomy2]
  }
]
