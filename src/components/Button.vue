<template>
<button class="btn" :style="{backgroundColor}" v-bind="$attrs"><slot/></button>
</template>

<script setup>

import {computed} from "vue";
import {useBackgroundColor, optionsColor} from '../composables/backgroundColor.js'

const props = defineProps({
        message: {
            default: '',
            type: String
        },
        ...optionsColor
    });

const backgroundColor = useBackgroundColor(props);

 
</script>

<style scoped>
.btn {
    padding: 10px 20px;
    height: 40px;
    color: var(--text-color);
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.7s ease;
    font-size: 20px;
    overflow: hidden;
}
.btn:hover {
    transform: scale(1.05);
}
</style>