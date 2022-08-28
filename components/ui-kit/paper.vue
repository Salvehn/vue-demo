<template>
    <div class="paper">
        <slot />
    </div>
</template>
<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';
@import '~/assets/styles/mixins.scss';

.paper {
    box-shadow: $paperShadow;
    width: 100%;
    background-color: $bg;
    height: fit-content;
    border-radius: 4px;
}
</style>