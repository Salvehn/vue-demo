
<template>
    <div class="selectWrapper">
        <select :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
            <option v-for="option in options" :value="option.value">{{ option.label }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        modelValue: {
            type: String,
            default(props) {
                return props.options[0].value
            }
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            selected: this.default
                ? this.default
                : this.options.length > 0
                    ? this.options[0]
                    : null,
            open: false,
        };
    },
    methods: {
        handleSelect() {
            this.selected = option;
            this.open = false;
            this.$emit('input', option);
        },

    },
    mounted() {
        this.$emit("input", this.selected);
    },
};
</script>
<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.selectWrapper {
    width: fit-content;
    height: fit-content;
    vertical-align: middle;
    position: relative;

    &::after {
        border-style: solid;
        border-width: 0.1em 0.1em 0 0;
        content: '';
        display: inline-block;
        height: 0.25em;
        position: relative;
        color: #B4B4B4;
        transform: rotate(135deg);
        vertical-align: middle;
        line-height: 15px;
        right: 16px;
        bottom: 0.05em;
        width: 0.25em;
    }
}

select {
    border-radius: 4px;
    border: 0;
    position: relative;
    text-align: left;
    color: #B4B4B4;
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 10px 27px 11px 16px;
    cursor: pointer;

    &:focus {
        border: none;
        outline: none !important;
    }


    .options {
        position: absolute;
        top: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        z-index: 2;
        gap: 10px;
        width: 100%;
        padding: 10px 0px 11px 16px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    }

    .option {
        cursor: pointer;

        &:hover {
            background-color: lightgray;
        }
    }

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}
</style>