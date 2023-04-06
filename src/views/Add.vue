<template>
<Portada namePage="Añadir Nueva Tarea" />
  <Alert
    :show="alert.show"
    :message="alert.message"
    @close="alert.show = false"
    :variant="alert.variant"
  />
  <AddTodoForm @submit="addTodoTitle" />
</template>
<script setup>
import Alert from "../components/Alert.vue";
import AddTodoForm from "../components/AddTodoForm.vue";
import { useAlert } from "../composables/alert.js";
import Portada from "../components/Portada.vue";
import axios from 'axios'

const { alert, showAlert } = useAlert();

async function addTodoTitle(data) {
  if (data.title === "") {
    showAlert("La tarea no puede estar vacía");
    return;
  }
  try {
    const res = await axios.post("/api/tareas", {
      "title": data.title,
      "contenido": data.contenido
    });
    showAlert('Tarea guardada', 'success');
  } catch (error) {
    showAlert("No se ha podido guardar la tarea");
    console.error(error);
  }
}
</script>
