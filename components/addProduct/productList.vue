<template>
    <ui-kit-scrollable-view :isActive="false">
        <div class="container">

            <ui-kit-card-item v-for="item in items" :poster="item.poster" :name="item.name"
                :description="item.description" @onDelete="handleDelete(item.id)">
                <span class="price">{{ item.price + ' ' + item.currency }}</span>
            </ui-kit-card-item>

        </div>
    </ui-kit-scrollable-view>
    <add-product-confirm-remove-dialog />
</template>
<script>
import { useProductsStore } from '~/store/products'
export default {
    name: 'LabeledTextInput',
    setup() {
        const store = useProductsStore()

        return { store }
    },
    computed: {
        items() {
            return this.store.list
        },

    },
    
    methods: {
        handleDelete(id) {
            // console.log(id)
            this.store.setSelected(id)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.container {
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 16px;

}

.price {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    color: $primaryText;
}
</style>