import axios from "axios";
import { ref, watch } from "vue";

function useFetch(url, options = {
    onError: null
}) {

    const isLoading = ref(true);
    const error = ref(null);
    const data = ref(null)

    let stopErrorWatcher = null;
    if (options.onError !== null) {
        stopErrorWatcher = watch(error, (e) => options.onError(e));
    }
    axios.get(url).
        then(res => data.value = res.data).
        catch((err) => { error.value = err}).
        finally(() => {
            isLoading.value = false;
            if (stopErrorWatcher !== null) {
              stopErrorWatcher();
            }
          })


    return {
        isLoading,
        error,
        data
    }


}

export { useFetch }