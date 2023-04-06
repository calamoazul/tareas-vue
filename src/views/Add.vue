<template>
<Portada namePage="Añadir Nueva Tarea" />
  <Alert
    :show="alert.show"
    :message="alert.message"
    @close="alert.show = false"
    :variant="alert.variant"
  />
  <TodoForm @submit="addTodoTitle" />
</template>
<script setup>
import Alert from "../components/Alert.vue";
import TodoForm from "../components/TodoForm.vue";
import { useAlert } from "../composables/alert.js";
import Portada from "../components/Portada.vue";
import axios from 'axios'
import {useRouter} from "vue-router";

const { alert, showAlert } = useAlert();

const router = useRouter();

async function addTodoTitle(data) {
  if (data.title === "" || data.contenido === "" || data.fecha === "") {
    showAlert("Rellena todos los campos por favor");
    return;
  }
  try {
    const res = await axios.post("/api/tareas", {
      "title": data.title,
      "contenido": data.contenido,
      "fecha": data.fecha
    });
    showAlert('Tarea guardada', 'success');
    setTimeout(() => {
      router.push('/');
    }, 2000);
  } catch (error) {
    showAlert("No se ha podido guardar la tarea");
    console.error(error);
  }
}
</script>
