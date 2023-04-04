<template>
  <div class="todo">
    <p>{{ title }}</p>
    <div class="container-buttons">
      <Button @click="$emit('editTodo')" variant="secondary"><Pencil /></Button>
      <Button @click="$emit('removeTodo')" variant="danger">&times;</Button>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Pencil from "./icons/Pencil.vue";
export default {
  components: { Button, Pencil },
  props: {
    title: {
      required: true,
      type: String,
    },
  },
  emits: ["removeTodo", "editTodo"],
};
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
</style>
