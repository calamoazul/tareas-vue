<template>
    <div v-if="show" class="alert">
        <div>{{ message }}</div>
        <div @click="$emit('close')" class="button-close">&times;</div>
    </div>
</template>

<script>

export default {
    props: {
        message: {
            type: String
        },
        show: {
            required: true,
            type: Boolean
        }
    },
    emits: ['close']
}
</script>

<style scoped>
    .alert {
        margin: 30px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        height: 50px;
        background-color: var(--danger-color);
        font-weight: 700;
    }
    .button-close {
        font-size: 30px;
    }
</style>