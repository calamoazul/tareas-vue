<template>
<Portada namePage="Lista de tareas" />
    <Spinner class="spinner" v-if="isLoading" />
    <Todo
      v-for="todo in todos"
      :title="todo.title"
      :contenido="todo.contenido"
      :key="todo.id"
      @removeTodo="remove(todo.id)"
      @editTodo="$router.push(`/tarea/${todo.id}/edit`)"
    />
</template>

<script setup>
import Portada from "../components/Portada.vue";
import EditTodo from "../components/EditTodo.vue";
import Todo from "../components/Todo.vue";
import Button from "../components/Button.vue";
import Spinner from "../components/Spinner.vue";
import { useFetch } from "../composables/fetch.js";
import axios from "axios";
import { ref, reactive } from "vue";

const editTodo = reactive({
  newTitle: "",
  todo: {
    id: 0,
    title: "",
    contenido: ""
  },
});

const { data: todos, isLoading } = useFetch("/api/tareas", {
  onError: () => showAlert("Fallo de conexión con el servidor"),
});


async function remove(todoId) {
  try {
    await axios.delete(`/api/tareas/${todoId}`);
  } catch (error) {
    showAlert("No se ha podido eliminar la tarea");
  }

  todos.value = todos.value.filter((todo) => todo.id !== todoId);
}
async function updateTodo(newTitle) {
  console.log(newTitle);
  let updatedTodo = {
    title: newTitle,
    id: editTodo.todo.id,
  };

  try {
    await axios.put(`/api/tareas/${editTodo.todo.id}`, updatedTodo);
    useFetch();
  } catch (error) {
    showAlert("No se ha podido actualizar la tarea");
  }
}

</script>

<style scoped>
.spinner {
  margin: 30px auto;
}
</style>
