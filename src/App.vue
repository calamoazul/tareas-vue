<template>
  <Navbar />
  <main class="container">
    <Alert
      :show="alert.show"
      :message="alert.message"
      @close="alert.show = false"
      variant="danger"
    />
    <Modal :show="this.editTodo.showModal" @close="this.editTodo.showModal = false">
      <template #header><h2>Editar tarea</h2></template>
      <template #body>
        <EditTodo @textoEditado="updateTodo" />
      </template>
      <template #footer>
        <div class="modal-footer">
          <Button @click="this.editTodo.showModal = false" variant="danger">
            &times;
          </Button>
        </div>
      </template>
    </Modal>
    <AddTodoForm @submit="addTodoTitle" />
    <Todo
      v-for="todo in todos"
      :title="todo.title"
      :key="todo.id"
      @removeTodo="remove(todo.id)"
      @editTodo="showEditForm(todo)"
    />
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Alert from "./components/Alert.vue";
import AddTodoForm from "./components/AddTodoForm.vue";
import EditTodo from "./components/EditTodo.vue";
import Todo from "./components/Todo.vue";
import Modal from "./components/Modal.vue";
import Button from "./components/Button.vue";
import axios from "axios";
export default {
  components: {
    Navbar,
    Alert,
    AddTodoForm,
    EditTodo,
    Todo,
    Modal,
    Button,
  },
  data() {
    return {
      todos: [],
      alert: {
        message: '',
        variant: 'danger',
        show: false
      },
      editTodo: {
        showModal: false,
        newTitle: '',
        todo: {
          id: 0,
          title: '',
        },
      },
    };
  },
  methods: {
    async getTodos() {
      try {
        const res = await axios.get("/api/tareas");
        this.todos = res.data;
      } catch (error) {
        this.showAlert('No se ha podido conectar con el servidor', 'danger');
      }
    },
    async addTodoTitle(title) {
      if (title === "") {
        this.showAlert('La tarea no puede estar vacía', 'danger' );
        return;
      }
      try {
        const res = await axios.post("/api/tareas", {
          title,
        });
        this.todos.push(res.data);
      } catch (error) {
        this.showAlert('No se ha podido guardar la tarea', 'danger');
      }
    },
    async remove(todoId) {
      try {
        await axios.delete(`/api/tareas/${todoId}`);
      } catch (error) {
        this.showAlert('No se ha podido eliminar la tarea', 'danger');
      }

      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
    async updateTodo(newTitle) {
      console.log(newTitle);
      let updatedTodo = {
        title: newTitle,
        id: this.editTodo.todo.id,
      };

      try {
        await axios.put(`/api/tareas/${this.editTodo.todo.id}`, updatedTodo);
        this.getTodos();
      } catch (error) {
        this.showAlert('No se ha podido actualizar la tarea', 'danger');
      }
    },
    showEditForm(content) {
      this.editTodo.showModal = true;
      this.editTodo.todo = { ...content };
    },
    showAlert(message, variant) {
      this.alert.show = true;
      this.alert.message = message;
      this.alert.variant = variant;
    }
  },
  created() {
    this.getTodos();
  },
};
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
</style>
