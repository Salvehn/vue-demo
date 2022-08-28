<template>
    <form @submit.prevent="submit" novalidate>
        <ui-kit-labeled-text-input label="Наименование товара" placeholder="Введите наименование товара" required
            v-model="v$.form.name.$model" :errorMessage="fieldError('name')" />
        <ui-kit-labeled-textarea-input label="Описание товара" placeholder="Введите описание товара" :rows="6"
            v-model="form.description" />
        <ui-kit-labeled-text-input label="Ссылка на изображение товара" placeholder="Введите ссылку"
            v-model="v$.form.poster.$model" required :errorMessage="fieldError('poster')" />
        <ui-kit-labeled-number-input label="Цена товара" placeholder="Введите цену" required
            v-model.number="v$.form.price.$model" :errorMessage="fieldError('price')" />
        <ui-kit-button text="Добавить товар" color="primary" type="submit" :disabled="v$.form.$invalid" />
    </form>
</template>
<script>
import { useProductsStore } from '~/store/products'
import useVuelidate from '@vuelidate/core'
import { required, url, helpers, numeric } from '@vuelidate/validators'
import { get } from 'lodash'
const initialState = () => ({
    name: '',
    description: '',
    poster: '',
    price: undefined,
    currency: 'руб.'
})

export default {

    setup() {
        const store = useProductsStore()
        return { v$: useVuelidate(), store }
    },
    data() {
        return {
            form: initialState(),
            isValidating: false
        }
    },
    validations() {
        return {
            form: {
                name: {
                    required: helpers.withMessage('Поле является обязательным', required)
                },
                poster: {
                    required: helpers.withMessage('Поле является обязательным', required),
                    url: helpers.withMessage('Не являетя ссылкой', url)
                },
                price: {
                    required: helpers.withMessage('Поле является обязательным', required),
                    numeric: helpers.withMessage('Не является числом', numeric)
                }
            },
        }
    }, methods: {
        submit() {
            this.v$.$touch();

            if (this.v$.$invalid) {
                return
            }
            this.store.add(this.form)
            Object.assign(this.$data.form, initialState());
            this.v$.form.$reset()

        },
        isValid(fieldName, validator) {
            return !get(this.v$, validator ?
                `form.${fieldName}.${validator}.$invalid` : `form.${fieldName}.$invalid`, false)
        },
        fieldError(fieldName) {
            const errors = get(this.v$, `form.${fieldName}.$errors`, []).map((e) => e.$message)
            return errors[0]
        }
    }
}
</script>
<style lang="scss" scoped>
form {
    padding: 24px
}
</style>