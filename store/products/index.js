import { v4 } from 'uuid'

import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
export const useProductsStore = defineStore({
    id: 'products-store',
    state: () => {
        return {
            list: useStorage('products', [...Array(10)].map((_, index) => {
                const price = index * 1000 + 1000;
                return {
                    id: v4(),
                    name: `Наименование товара ${index + 1}`,
                    description: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
                    poster: '~assets/images/cardImage.png',
                    price: new Intl.NumberFormat('fr-FR').format(price),
                    currency: 'руб.'
                }
            })),
            selectedProduct: null
        }
    },
    actions: {
        setSelected(id) {
            console.log(id)
            this.selectedProduct = id
        },
        add(product) {
            const data = { id: v4(), ...product }
            this.list.push(data)
        },
        remove(id) {
            this.list = this.list.filter((x) => x.id != id)
        }
    },

})