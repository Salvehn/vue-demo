<template>
    <div class="wrapper" :class="{ 'wrapperActive': active }">
        <ui-kit-burger class="burger" @click="toggle" />
        <div class="sidebar" :class="{ 'active': !active }">
            <ui-kit-paper>
                <add-product-form />
            </ui-kit-paper>

        </div>
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
.sidebar {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
   
}
.sidebar:deep(label){
     font-size: 14px !important;
}
.sidebar:deep(input){
     font-size: 16px !important;
}
.sidebar:deep(textarea){
     font-size: 16px !important;
}
.sidebar:deep(button){
     font-size: 16px !important;
}


.burger {

    padding: 16px;
}

.wrapper {
    position: absolute;
    top: 0;
    left: 0;
}

.wrapperActive {
    background-color: white;
    width: 100vw;
    height: 100vh;
}

.active {
    // background: none;
    display: none;
}
</style>