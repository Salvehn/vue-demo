<template>
    <div class="header">
        <span>Добавление элемента</span>
        <ui-kit-select 
            :options="[{ label: 'По умолчанию', value: 'name' }, { label: 'По цене', value: 'price' }]" />
    </div>
</template>
<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    height: calc(100% - 16px);

    span {
        font-size: 28px;
        line-height: 35px;
        font-weight: 600;
    }


}
</style>