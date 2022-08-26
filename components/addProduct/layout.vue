<template>
    <div class="page">
        <div class="page-header">
            <add-product-header />
        </div>
        <div class="page-main">
            <aside class="sidebar">
                <ui-kit-paper>
                    <add-product-form />
                </ui-kit-paper>

            </aside>
            <add-product-list />
        </div>
    </div>
</template>

<style scoped>
.page {
    display: grid;
    grid-template-rows: 75px 4fr;
    height: 100vh;
    padding-left: 32px;
    padding-right: 32px;

}

.page-main {
    display: grid;

    grid-template-columns: calc(25% - 10px) calc(75%);
    gap: 16px;
    height: calc(100vh - 75px);

}

.sidebar {}
</style>