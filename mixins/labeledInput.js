export const labeledInput = {
    props: {
        label: {
            type: String,
            required: true,
        },
        required: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String
        },
    }
}