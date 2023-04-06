import { reactive } from "vue";

function useAlert() {

    const alert = reactive({
        message: "",
        variant: "",
        show: false,
    });

    const showAlert = (message, variant ="danger") => {
        alert.show = true;
        alert.message = message;
        alert.variant = variant;
      }

    return {
        alert,
        showAlert
    }
}

export {useAlert}