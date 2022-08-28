<template>
    <ui-kit-scrollable-view :isActive="false">

        <transition-group name="container" class="container" tag="div" appear mode="out-in">

            <ui-kit-card-item v-for="item in items" :key="item.id" class="container-item" :poster="item.poster"
                :name="item.name" :description="item.description" @onDelete="handleDelete(item.id)">
                <span class="price">{{ new Intl.NumberFormat('fr-FR').format(item.price) + ' ' + item.currency
                }}</span>
            </ui-kit-card-item>

        </transition-group>

    </ui-kit-scrollable-view>
    <add-product-confirm-remove-dialog />
</template>
<script>
import { useProductsStore } from '~/store/products'
const typedCompare = (a, b, key, reverse) => {

    reverse = !reverse ? 1 : -1;
    if (typeof a[key] == 'number') {
        return reverse * (a[key] - b[key])
    } else if (typeof a[key] == 'string') {
        return reverse * a[key].localeCompare(b[key])
    } else {
        return 0
    }

}

export default {
    name: 'LabeledTextInput',
    setup() {
        const store = useProductsStore()

        return { store }
    },
 
    computed: {
        items() {
            return this.store.list
        }
    },
    watch: {
        'store.sort': {
            deep: true,
            handler: function ({ type, reverse }) {
                this.items.sort((a, b) => typedCompare(a, b, type, reverse))
            }

        },


    },

    methods: {
        handleDelete(id) {
            this.store.setSelected(id)
        },

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

.container-move {

    transition: transform 1s;
}

.container-item {
    transition: all 0.5s;
    display: inline-block;
}

.container-enter,
.container-leave-to

/* .container-leave-active below version 2.1.8 */
    {
    opacity: 0;
    transform: translateY(30px);
}

.container-leave-active {
    position: absolute;
}
</style>