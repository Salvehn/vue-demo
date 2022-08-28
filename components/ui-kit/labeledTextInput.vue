
<template>
    <div class="inputContainer">
        <label v-bind:class="{ 'required': required }">
            {{ label }}
        </label>
        <input :class="{ 'error': errorMessage }" type="text" :name="name" :required="required"
            :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
        <span v-if="errorMessage" class="hint" :class="{ 'errorMessage': errorMessage }">{{ errorMessage }}</span>
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
@import '~/assets/styles/_mixins.scss';

label {
    @include labelMixin;
}

.inputContainer {
    @extend .inputMargin;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.error {
    border: 1px solid $errorColor;
    border-radius: 4px;
}

.errorMessage {
    color: $errorColor  !important;
}

.hint {
    @include inputHintMixin;
}

input {
    @include inputMixin;
}
</style>