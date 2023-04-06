<template>
<div class="container-titulo">
<h1>{{ title }}</h1>
</div>

</template>

<script setup>
const props = defineProps({
    namePage: {
        type: String,
        default: 'APP VUE'
    }
})

const title = props.namePage;
</script>

<style scoped>
.container-titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 150px;
    margin: auto;
}
</style>