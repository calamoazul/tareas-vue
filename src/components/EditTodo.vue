<template>
  <form class="edit-form">
    <input v-model="title" type="text" />
    <Button @click.prevent="editarTitle" variant="success">Editar</Button>
  </form>
</template>

<script setup>

import {ref, reactive} from "vue";
import Button from "./Button.vue";

const title = ref('');

const emit = defineEmits(['textoEditado']);

function editarTitle() {
  emit('textoEditado', title.value);
}
</script>

<style scoped>
.edit-form {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.edit-form input {
  height: 40px;
  border: solid 0.5px var(--accent-color);
  width: 50%;
  margin: auto;
}
</style>
