<template>
    <div class="container-form">
        <form class="todo-form">
            <input v-model="todoData.title" placeholder="Escribe el nombre de tu tarea" type="text"/>
            <input v-model="todoData.contenido" placeholder="Escribe el contenido de tu tarea" type="text"/>
        </form>
        <div>
            <button @click="$emit('submit', todoData)">Añadir Tarea</button>
        </div>
    </div>
</template>

<script setup>

import {ref, reactive} from "vue";

const todoData = reactive({
    title: "",
    contenido: ""
});

</script>

<style scoped>
.container-form {
    background-color: var(--accent-color);
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
}

form {
    width: 100%;
}
.container-form form input {
    height: 30px;
    padding: 10px;
    width: 80%;
    margin-bottom: 15px;
}

.container-form button {
    height: 40px;
    width: 150px;
    background-color: rgb(6 95 70);
    padding: 10px 20px;
    color: var(--text-color);
    border: none;
    cursor: pointer;
}
</style>