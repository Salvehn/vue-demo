<template>
    <form @submit.prevent="submit" novalidate>
        <ui-kit-labeled-text-input label="Наименование товара" placeholder="Введите наименование товара" required
            v-model="v$.form.name.$model" />
        <ui-kit-labeled-textarea-input label="Описание товара" placeholder="Введите описание товара" :rows="6" v-model="form.description" />
        <ui-kit-labeled-text-input label="Ссылка на изображение товара" placeholder="Введите ссылку" v-model="v$.form.poster.$model" required/>
        <ui-kit-labeled-number-input label="Цена товара" placeholder="Введите цену" required v-model.number="v$.form.price.$model" />
        <ui-kit-button text="Добавить товар" color="primary" type="submit" :disabled="v$.form.$invalid" />
    </form>

</template>
<script>

import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { get } from 'lodash'
export default {

    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            form: {
                name: '',
                description: '',
                poster: '',
                price: undefined
            },
            isValidating: false
        }
    },
    validations() {
        return {
            form: {
                name: {
                    required
                },

                poster: {
                    required
                },
                price: {
                    required
                }
            },
        }
    }, methods: {
        submit() {
            this.v$.$touch();
     
            if (this.v$.$invalid) {
                return
            }
       
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