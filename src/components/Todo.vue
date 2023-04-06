<template>
  <div class="todo">
    <div class="column">
      <h2>Título</h2>
      <p>{{ title }}</p>
    </div>
    <div class="column">
      <h2>Contenido</h2>
      <p>{{ contenido }}</p>
    </div>
    <div class="column">
      <h2>Fecha para la tarea</h2>
      <p>{{ fecha }}</p>
    </div>
    <div class="container-buttons">
      <Button @click="emit('editTodo')" variant="secondary"><Pencil /></Button>
      <Button @click="emit('removeTodo')" variant="danger">&times;</Button>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import Pencil from "./icons/Pencil.vue";

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  contenido: {
    type: String,
  },
  fecha: {
    type: String,
  },
});

const emit = defineEmits(["editTodo", "removeTodo"]);
</script>

<style scoped>
.todo {
  display: flex;
  justify-content: space-between;
  background-color: var(--accent-color);
  height: 40px;
  align-items: center;
  padding: 20px;
  margin: 20px auto;
}
.container-buttons {
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.column h2 {
  font-size: 18px;
  margin-bottom: 0px;
}
</style>
