
<template>
    <div class="inputContainer">

        <label v-bind:class="{ 'required': required }">
            {{ label }}

        </label>

        <input type="text" :name="name" :required="required" :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" />
    </div>

</template>

<script>
import { labeledInput } from '~~/mixins/labeledInput';
import { vuelidateInput } from '~~/mixins/vuelidateInput';

export default {
    name: 'LabeledTextInput',
    mixins: [vuelidateInput, labeledInput],

    props: {
        modelValue: {
            type: String,
            default: ""
        }
    },
    computed: {
        name() {
            return this.label.toLowerCase();
        },
    },
}
</script>
<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
@import '~/assets/styles/main.scss';
@import '~/assets/styles/mixins.scss';

label {
    line-height: 13px;
    letter-spacing: -0.02em;
    color: $secondaryText;
    font-size: 10px;
    position: relative;
    align-self: flex-start;
    margin-bottom: 4px;
}

.inputContainer {
    @extend .inputMargin;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.error {
    border: 1px solid #FF8484;
    border-radius: 4px;
}

input {
    @include shadow;
    @include input;
}
</style>