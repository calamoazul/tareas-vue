<template>
  <Navbar />
  <main class="container">
    <Alert
      :show="alert.show"
      :message="alert.message"
      @close="alert.show = false"
      variant="danger"
    />
    <Modal :show="editTodo.showModal" @close="editTodo.showModal = false">
      <template #header><h2>Editar tarea</h2></template>
      <template #body>
        <EditTodo @textoEditado="updateTodo" />
      </template>
      <template #footer>
        <div class="modal-footer">
          <Button @click="editTodo.showModal = false" variant="danger"> &times; </Button>
        </div>
      </template>
    </Modal>
    <AddTodoForm @submit="addTodoTitle" />
    <Spinner class="spinner" v-if="isLoading" />
    <Todo
      v-for="todo in todos"
      :title="todo.title"
      :key="todo.id"
      @removeTodo="remove(todo.id)"
      @editTodo="showEditForm(todo)"
    />
  </main>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Alert from "./components/Alert.vue";
import AddTodoForm from "./components/AddTodoForm.vue";
import EditTodo from "./components/EditTodo.vue";
import Todo from "./components/Todo.vue";
import Modal from "./components/Modal.vue";
import Button from "./components/Button.vue";
import Spinner from "./components/Spinner.vue";
import { useFetch } from "./composables/fetch.js";
import { useAlert } from "./composables/alert.js";
import axios from "axios";
import { ref, reactive } from "vue";

const editTodo = reactive({
  showModal: false,
  newTitle: "",
  todo: {
    id: 0,
    title: "",
  },
});

const { data: todos, isLoading } = useFetch("/api/tareas", {
  onError: () => showAlert('Fallo de conexión con el servidor')
});

const { alert, showAlert } = useAlert();

async function addTodoTitle(title) {
  if (title === "") {
    showAlert("La tarea no puede estar vacía");
    return;
  }
  try {
    const res = await axios.post("/api/tareas", {
      title,
    });
    todos.value.push(res.data);
  } catch (error) {
    showAlert("No se ha podido guardar la tarea");
  }
}
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

function showEditForm(content) {
  editTodo.showModal = true;
  editTodo.todo = { ...content };
}
</script>

<style scoped>
.modal-footer {
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
}
.edit-button {
  margin-right: 20px;
}
.spinner {
  margin: 30px auto;
}
</style>
