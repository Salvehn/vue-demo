<template>
    <div class="page">
        <div class="page-header">

        </div>
        <div class="page-main">
            <aside class="sidebar">

            </aside>
            <div class="main">

            </div>
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
        grid-template-columns: 1fr 4fr;
    }
</style>