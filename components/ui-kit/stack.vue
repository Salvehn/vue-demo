<template>
    <div class="stack" :style="{ '--gap': gap }">
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
.stack {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
}
</style>