<template>
    <div class="dropdown">
        <div class="selector">
            <button type="button" @click="toggle" v-click-outside="close">{{ options[0].label
            }}</button>
        </div>

        <div v-if="isOpen" class="options">
            <div v-for="option in options" class="option">
                {{ option.label }}
            </div>
        </div>

    </div>

</template>
<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    props: {
        options: {
            type: Array,
            required: true,
            default: ['Нет вариантов']
        }
    },
    methods: {
        toggle() {
            // this.$emit("input", isOn);
            this.isOpen = !this.isOpen;
        },
        close() {
            this.isOpen = false
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.dropdown {

    min-width: 100px;
    border-radius: 4px;
    display: flex;
    position: relative;
    text-align: left;
    color: #B4B4B4;
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;

    button {
        cursor: pointer;
        background-color: $color-white;
        width: 100%;
        padding: 10px 27px 11px 16px;
        border: none;
        text-align: left;
        color: inherit;
        font-size: inherit;
        line-height: inherit;
        font-weight: inherit;

        &::after {
            border-style: solid;
            border-width: 0.1em 0.1em 0 0;
            content: '';
            display: inline-block;
            height: 0.25em;
            left: 5px;
            position: relative;
            top: 0.43em;
            transform: rotate(135deg);
            vertical-align: top;
            width: 0.25em;
        }
    }

    .selector {

        display: flex;
        flex-direction: row;
        justify-content: space-between;
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

.active {
    display: none;
}
</style>