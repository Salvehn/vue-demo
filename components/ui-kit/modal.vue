<template>
    <div class="modal-overlay" v-bind:class="{ 'closed': !opened }">
        <div class="modal">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        opened: {
            type: Boolean,
            default: false
        }
    }

}
</script>
<style lang="scss" scoped>
.closed {
    display: none !important;
}

.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: 3;
    background-color: #000000da;
}

.modal {
    text-align: center;
    background-color: white;
    height: fit-content;
    max-height: 70%;
    min-width: 300px;
    width: fit-content;
    max-width: 70%;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
    padding: 16px;
}

.close {
    margin: 10% 0 0 16px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    position: relative;
}

.close-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.check {
    width: 150px;
}
</style>