import { v4 } from 'uuid'

import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
export const useProductsStore = defineStore({
    id: 'products-store',
    state: () => {
        const list = [...Array(10)]
        const lastUpdate = new Date().getTime()
        return {
            list: useStorage('products', list.map((_, index) => {
                const price = index * 1000 + 1000;

                return {
                    id: v4(),
                    name: `Наименование товара ${list.length - index}`,
                    description: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
                    poster: '~assets/images/cardImage.png',
                    price: price,
                    lastUpdate,
                    currency: 'руб.'
                }
            })),
            selectedProduct: null,
            sort: {
                type: null,
                reverse: false
            }
        }
    },
    actions: {
        setSelected(id) {
            console.log(id)
            this.selectedProduct = id
        },
        add(product) {
            const lastUpdate = new Date().getTime()
            const data = { id: v4(), lastUpdate, ...product }
            this.list.push(data)
        },
        remove(id) {
            this.list = this.list.filter((x) => x.id != id)
        },
        setSort(type, reverse) {
        
            this.sort.type = type;
            this.sort.reverse = reverse;
        }
    },

})