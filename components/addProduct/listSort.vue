<template>
    <ui-kit-select :options="options" v-model="selected" @click="handleSelect" />
</template>
<script>
import { useProductsStore } from '~/store/products'

const options = [{ label: 'По умолчанию', value: 'default' }, { label: 'По наименованию', value: 'name', default: true }, { label: 'По цене', value: 'price' }]

export default {

    setup() {
        const store = useProductsStore()

        return { store }
    },
    data() {
        return {
            options,
            reverse: true,
            selected: options[0].value
        }
    },
    methods: {
        handleSelect(e) {

            if (e.pointerId == 0) {

                if (e.target.value == this.selected) {
                    this.reverse = !this.reverse
                } else {
                    this.reverse = false
                }

                let type = this.selected

                if (type == 'default') {
                    type = options.find((x) => x.default)?.value
                    if (type) {
                        this.store.setSort(type, false)
                    }
                } else {
                    this.store.setSort(type, this.reverse)
                }

            }
        },
    },


}
</script>
