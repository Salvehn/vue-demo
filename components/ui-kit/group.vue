<template>
    <div class="group" :style="{ '--gap': gap }">
        <slot />
    </div>
</template>
<script>
export default {
    props: {
        gap: {
            type: String,
            default: '0px'
        }
    }
}
</script>
<style lang="scss" scoped>
.group {
    display: flex;
    flex-direction: row;
    gap: var(--gap);
}
</style>