<template>
    <div class="scrollable" v-bind:class="{active: isActive == true}">
        <slot />
    </div>
</template>
<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
.active{
    overflow: auto;
}
.scrollable {
    width: 100%;
    height: 100%
}
</style>