<template>
    <div class="todo">
        <p>{{ title }}</p>
        <div @click="$emit('removeTodo')" class="button-close">&times;</div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String
        }
    },
    emits: ['removeTodo']
}
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
.button-close {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 20px;
  background-color: var(--danger-color);
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
}
</style>