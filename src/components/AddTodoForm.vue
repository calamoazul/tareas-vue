<template>
    <div class="container-form">
        <form class="todo-form">
            <input v-model="todoTitle" placeholder="Escribe el nombre de tu tarea" type="text"/>
        </form>
        <div>
            <button @click="$emit('submit', todoTitle)">Añadir Tarea</button>
        </div>
    </div>
</template>

<script setup>

import {ref, reactive} from "vue";

const todoTitle = ref("");

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