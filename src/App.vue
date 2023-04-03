<template>
<Navbar/>
<main class="container">
  <Alert :show="showAlert" message="El todo no puede estar vacío" @close=" showAlert = false "/>
  <AddTodoForm @submit="addTodoTitle" />
  <Todo v-for="todo in todos" :title="todo.title" :key="todo.id" @removeTodo="remove(todo.id)" />
</main>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Alert from './components/Alert.vue';
import AddTodoForm from './components/AddTodoForm.vue';
import Todo from './components/Todo.vue';
import axios from 'axios'
export default {
  components: {
    Navbar,
    Alert,
    AddTodoForm, 
    Todo
  },
  data() {
    return {
      showAlert: false,
      todos: []
    }
  },
  methods: {
    async getTodos() {
      try {
        const res = await axios.get('/api/tareas');
        this.todos = res.data;
      }
      catch (error) {
        console.error(error);
      }
    },
    addTodoTitle(title) {
      if(title === "") {
        this.showAlert = true;
        return;
      }

      this.todos.push( {
        title,
        id: Math.floor(Math.random() * 1000)
      })
    },
    remove(todoId) {
      try {
        await axios.delete(`/api/tareas/${todoId}`);
      }
      catch (error) {
        console.error(error);
      }

      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    }
  },
  created() {
    this.getTodos();
  }
}
</script>

<style scoped>

</style>
