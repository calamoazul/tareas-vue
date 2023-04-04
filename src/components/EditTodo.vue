<template>
  <form class="edit-form">
    <input v-model="this.title" type="text" />
    <Button @click.prevent="editarTitle" variant="success">Editar</Button>
  </form>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  data() {
    return {
      title: '',
    };
  },
  methods: {
    editarTitle() {
      this.$emit("textoEditado", this.title);
    },
  },
};
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
