import { defineStore } from 'pinia'
import type { Rental } from '@/types/Rental'

export const useRentalStore = defineStore('rentalStore', {
  state: () => ({
    rentals: [
      {
        id: '1',
        name: 'Офіс у центрі',
        description: 'Сучасний офіс біля метро',
        price: 12000,
        location: 'Київ, вул. Хрещатик 10',
        geometry: {
          type: 'Point',
          coordinates: [30.5244, 50.4501]
        }
      },
      {
        id: '2',
        name: 'Майстерня',
        description: 'Майстерня у промзоні',
        price: 8000,
        location: 'Київ, вул. Вербова 2',
        geometry: {
          type: 'Point',
          coordinates: [30.5200, 50.4522]
        }
      },
      {
        id: '3',
        name: 'Коворкінг на Подолі',
        description: 'Затишний простір для фрілансерів та стартапів',
        price: 6000,
        location: 'Київ, вул. Сковороди 5',
        geometry: {
          type: 'Point',
          coordinates: [30.5141, 50.4672]
        }
      },
      {
        id: '4',
        name: 'Складське приміщення',
        description: 'Сухе складське приміщення 100м²',
        price: 5000,
        location: 'Київ, вул. Магнітогорська 1',
        geometry: {
          type: 'Point',
          coordinates: [30.6291, 50.4803]
        }
      },
      {
        id: '5',
        name: 'Магазин на Оболоні',
        description: 'Комерційне приміщення під роздрібну торгівлю',
        price: 10000,
        location: 'Київ, просп. Оболонський 15',
        geometry: {
          type: 'Point',
          coordinates: [30.4990, 50.5067]
        }
      },
      {
        id: '6',
        name: 'Офіс у бізнес-центрі',
        description: 'Престижний офіс у новому бізнес-комплексі',
        price: 25000,
        location: 'Київ, вул. Жилянська 75',
        geometry: {
          type: 'Point',
          coordinates: [30.5083, 50.4379]
        }
      },
      {
        id: '7',
        name: 'Студія для майстер-класів',
        description: 'Світле приміщення для творчих занять',
        price: 7000,
        location: 'Київ, вул. Іллінська 12',
        geometry: {
          type: 'Point',
          coordinates: [30.5192, 50.4621]
        }
      },
      {
        id: '8',
        name: 'Невеликий склад',
        description: 'Приміщення 50м², зручний під’їзд',
        price: 4000,
        location: 'Київ, вул. Бориспільська 9',
        geometry: {
          type: 'Point',
          coordinates: [30.6862, 50.4253]
        }
      },
      {
        id: '9',
        name: 'Офіс з ремонтом',
        description: 'Готовий до в’їзду офіс на Печерську',
        price: 13500,
        location: 'Київ, вул. Лесі Українки 20',
        geometry: {
          type: 'Point',
          coordinates: [30.5402, 50.4244]
        }
      },
      {
        id: '10',
        name: 'Підвальне приміщення',
        description: 'Ідеально під склад або майстерню',
        price: 3000,
        location: 'Київ, вул. Кирилівська 104',
        geometry: {
          type: 'Point',
          coordinates: [30.4621, 50.4805]
        }
      }
    ] as Rental[]
  })
})
