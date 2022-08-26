<template>

    <button class="button" :class="color" :type="type" :disabled="disabled">
        {{ text }}
    </button>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'button'
        },
        text: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: 'primary',
        },
        disabled:{
            type: Boolean,
            default: false
        }
    },



}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';
@import '~/assets/styles/_mixins.scss';
@import '~/assets/styles/button.scss';
.button {
    font-style: normal;
    color: $color-white;
    border: none;
    border-radius: 10px;
    padding: 10px 0 11px 0;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
    font-weight: 600;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
</style>