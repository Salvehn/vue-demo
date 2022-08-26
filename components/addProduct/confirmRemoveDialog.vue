<template>
    <ui-kit-modal :opened="opened">
        <ui-kit-stack gap="20px">
            <h4>Удалить запись?</h4>
            <ui-kit-group gap="20px">
                <ui-kit-button text="Да" @click="confirm" color="primary" />
                <ui-kit-button text="Нет" @click="cancel" color="secondary" />
            </ui-kit-group>
        </ui-kit-stack>

    </ui-kit-modal>
</template>
<script>

import { useProductsStore } from '~~/store/products';
export default {
    setup() {
        const store = useProductsStore()

        return { store }
    },

    computed: {

        opened() {
            return this.store.selectedProduct != null
        }

    },



    methods: {
        confirm() {
            this.store.remove(this.store.selectedProduct)
            this.store.setSelected(null)
        },
        cancel() {

            this.store.setSelected(null)
        },


    }
}
</script>