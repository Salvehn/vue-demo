<template>
    <div class="page">
        <div class="page-header">
            <add-product-header />
        </div>
        <div class="page-main">
            <div class="sidebarSelector">
                <add-product-sidebar class="sidebar" />
                <add-product-mobile-sidebar class="mobileSidebar" />
            </div>


            <add-product-list />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page {
    display: grid;
    grid-template-rows: 75px 4fr;
    height: 100vh;
    padding-left: 32px;
    padding-right: 32px;

}

.page-main {
    display: grid;

    grid-template-columns: minmax(250px, calc(25% - 10px)) calc(75%);
    gap: 16px;
    height: calc(100vh - 75px);

}

.sidebarSelector {
    z-index: 3;
}

.mobileSidebar {
    display: none;

}

@media screen and (max-width: 500px), (orientation: portrait) {
    .page {
        margin-top: 75px;
    }

    .page-main {
        grid-template-columns: 0 100%;
    }

    .mobileSidebar {
        display: block !important;

    }

    .sidebar {
        display: none;
    }

}
</style>