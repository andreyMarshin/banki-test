export interface IProduct {
  id: string
  title: string
  price: number
  oldPrice?: number
  isSold?: boolean
  description: string
  images: string[]
}

export type TCartStatus = 'idle' | 'pending' | 'in-cart'
