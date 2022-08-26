export const vuelidateInput = {
    props: {
        errorMessage: {
            type: String,
            default: undefined
        }
    },
    computed: {
        _value: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    }
}