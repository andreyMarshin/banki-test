import { computed, ref } from 'vue'
import { PRODUCTS } from '@/constants/products'

const searchQuery = ref('')

export default () => {
  const normalizedQuery = computed(() =>
    searchQuery.value.trim().toLocaleLowerCase('ru-RU')
  )

  const products = computed(() => {
    if (!normalizedQuery.value) return PRODUCTS

    return PRODUCTS.filter(item =>
      item.title.toLocaleLowerCase('ru-RU').includes(normalizedQuery.value)
    )
  })

  const isEmpty = computed(() => !products.value.length)

  return {
    searchQuery,
    products,
    isEmpty
  }
}
