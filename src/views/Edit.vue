<template>
  <Portada namePage="Editar Tarea" />
  <Alert
    :show="alert.show"
    :message="alert.message"
    :variant="alert.variant"
    @close="alert.show = false"
  />

  <TodoForm v-if="todo" @submit="updateTodo"
  :title="todo.title"
  :contenido="todo.contenido"
  :fecha="todo.fecha" />
</template>

<script setup>
import Portada from "../components/Portada.vue";
import { useAlert } from "../composables/alert.js";
import TodoForm from "../components/TodoForm.vue";
import Alert from "../components/Alert.vue";
import axios from "axios";
import {ref, reactive} from "vue";
import {useRouter} from "vue-router";
import {useFetch} from "../composables/fetch.js"

const { alert, showAlert } = useAlert();
const props = defineProps(["id"]);
const router = useRouter();


const {data: todo, error, isLoading} = useFetch(`/api/tareas/${props.id}`, {
  onError: () => {
    alert.show = true;
    showAlert('Error al recibir datos de la tarea');
  }
});


async function updateTodo(newContent) {

  if (newContent.title === "" || newContent.contenido === "" || newContent.fecha === "") {
    showAlert("Rellena todos los campos por favor");
    return;
  }
  
  let updatedTodo = {
    title: newContent.title,
    id: props.id,
    contenido: newContent.contenido,
    fecha: newContent.fecha
  };

  try {
    await axios.put(`/api/tareas/${props.id}`, updatedTodo);
    showAlert('Tarea actualizada correctamente', 'success');
    setTimeout(() => {
      router.push('/');
    }, 2000);
  } catch (error) {
    showAlert("No se ha podido actualizar la tarea");
  }
}
</script>
