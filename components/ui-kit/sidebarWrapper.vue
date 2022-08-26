<template>
    <div class="sidebarWrapper" >
        <ui-kit-burger class="burger" @click="toggle" />
        <slot :class="{ 'active': !active }"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: false
        }
    },
    methods: {
        toggle() {
            this.active = !this.active
        }
    }
}
</script>
<style lang="scss" scoped>
.sidebarWrapper {
    width: 100%;
    top: 0;
    left: 0;
    background-color: white;
    height: 100vh;
    z-index: 2;
}

.burger {
    display: none;
    padding: 16px;
}

.active {
    background: none;
    display: none
}

@media screen and (min-width: 500px) {
    .active {
        background: white;
    }
}

@media screen and (max-width: 500px) {
    .burger {
        display: block;
    }

    .sidebarWrapper {
        width: 100vw !important;
        position: fixed;
    }
}
</style>