import {computed} from "vue"

function useBackgroundColor(props) {

 return computed(() => {
    const options = {
                danger: "var(--danger-color)",
                info: "var(--info-color)",
                success: "var(--accent-color)",
                warning: "var(--warning-color)",
                secondary: "var(--secondary-color)"
            }

            return options[props.variant];
})

}

const optionsColor = {
    variant: {
        default: 'info',
        type: String,
        validator(value) {
            const options = ['info', 'success', 'warning', 'danger', 'secondary'];
            return options.includes(value);
        }
    }
}

export {useBackgroundColor, optionsColor}