import axios from "axios";
import {ref} from "vue";

function useFetch(url) {

    const isLoading = ref(true);
    const error = ref(null);
    const data = ref(null)
    axios.get(url).
        then(res => data.value = res.data).
        catch(error => error.value = error).
        finally(
            isLoading.value = false
        )


    return {
        isLoading,
        error,
        data
    }

    
}

export {useFetch}