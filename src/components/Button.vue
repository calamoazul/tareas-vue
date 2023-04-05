<template>
<button class="btn" :style="{backgroundColor}" v-bind="$attrs"><slot/></button>
</template>

<script setup>

import {computed} from "vue";

const props = defineProps({
        message: {
            default: '',
            type: String
        },
        variant: {
            default: 'info',
            type: String,
            validator(value) {
                const options = ['info', 'success', 'warning', 'danger', 'secondary'];
                return options.includes(value);
            }
        }
    });

const backgroundColor = computed(() => {
    const options = {
                danger: "var(--danger-color)",
                info: "var(--info-color)",
                success: "var(--accent-color)",
                warning: "var(--warning-color)",
                secondary: "var(--secondary-color)"
            }

            return options[props.variant];
});
 
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