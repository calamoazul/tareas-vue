<template>
  <div v-if="show" class="alert" :style="{ backgroundColor }">
    <div>{{ message }}</div>
    <div @click="$emit('close')" class="button-close">&times;</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import {useBackgroundColor, optionsColor} from "../composables/backgroundColor.js";

const props = defineProps({
  message: {
    type: String,
  },
  show: {
    required: true,
    type: Boolean,
  },
  ...optionsColor
});

const emit = defineEmits(["close"]);

const backgroundColor = useBackgroundColor(props);
</script>

<style scoped>
.alert {
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 50px;
  font-weight: 700;
}
.button-close {
  font-size: 30px;
  cursor: pointer;
}
</style>
