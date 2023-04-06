<template>
  <Portada namePage="Lista de tareas" />
  <Alert
    :show="alert.show"
    :message="alert.message"
    @close="alert.show = false"
    :variant="alert.variant"
  />
  <Spinner class="spinner" v-if="isLoading" />
  <Todo
    v-for="todo in todos"
    :title="todo.title"
    :contenido="todo.contenido"
    :fecha="todo.fecha"
    :key="todo.id"
    @removeTodo="remove(todo.id)"
    @editTodo="$router.push(`/tarea/${todo.id}/edit`)"
  />
</template>

<script setup>
import Portada from "../components/Portada.vue";
import EditTodo from "../components/EditTodo.vue";
import Alert from "../components/Alert.vue";
import { useAlert } from "../composables/alert.js";
import Todo from "../components/Todo.vue";
import Button from "../components/Button.vue";
import Spinner from "../components/Spinner.vue";
import { useFetch } from "../composables/fetch.js";
import axios from "axios";
import { ref, reactive } from "vue";

const {alert, showAlert} = useAlert();

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
</script>

<style scoped>
.spinner {
  margin: 30px auto;
}
</style>
