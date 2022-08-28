
<template>
    <ui-kit-paper class="сontainer">
        <ui-kit-icons-trash class="trash" @click="handleDelete" />
        <img class="poster" src="~assets/images/cardImage.png" />
        <div class="content">
            <span class="name">{{ name }}</span>
            <p class="description">{{ description }}</p>
            <div class="footer">
                <slot />
            </div>
        </div>

    </ui-kit-paper>

</template>

<script>

export default {

    name: 'cardItem',
    props: {

        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        poster: {
            type: String,
            required: true,
        },
        required: {
            type: Boolean,
            required: false,
            default: false,
        },
        placeholder: {
            type: String
        },

    },
    methods: {
        handleDelete() {
            this.$emit('onDelete');
        }
    }

}
</script>
<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';

.trash {
    position: absolute;
    right: -8px;
    top: -8px;
    display: none;
    cursor: pointer;
}

.сontainer {

    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    &:hover {


        .trash {
            display: block;
        }

    }

}

.content {

    display: flex;
    flex-direction: column;
    padding: 16px 16px 24px 16px;
}

.name {
    font-size: 20px;
    // line-height: 0.65em;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: $primaryText;

    font-weight: 600;
    position: relative;
    align-self: flex-start;
}

.description {
    // font-size: 0.8em;
    font-size: 16px;
    flex-grow: 1;
}

.poster {
    user-select: none;
    width: 100%;
    height: auto;
    object-fit: fill;
}

.footer {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: left;

}
</style>