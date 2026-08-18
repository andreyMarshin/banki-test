import { ref, watch } from 'vue'
import { TCartStatus } from '@/types/product'

const STORAGE_KEY = 'banki-shop:cart'
const PROCESSING_DELAY = 2000

const readStorage = (): string[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const cartIds = ref<string[]>(readStorage())
const pendingIds = ref<string[]>([])

watch(
  cartIds,
  value => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch {
      // в приватном режиме Safari запись падает, корзина живёт только в памяти
    }
  },
  { deep: true }
)

export default () => {
  const getStatus = (id: string): TCartStatus => {
    if (cartIds.value.includes(id)) return 'in-cart'

    if (pendingIds.value.includes(id)) return 'pending'

    return 'idle'
  }

  const addToCart = (id: string) => {
    if (getStatus(id) !== 'idle') return

    pendingIds.value = [...pendingIds.value, id]

    setTimeout(() => {
      pendingIds.value = pendingIds.value.filter(item => item !== id)
      cartIds.value = [...cartIds.value, id]
    }, PROCESSING_DELAY)
  }

  return {
    cartIds,
    getStatus,
    addToCart
  }
}
