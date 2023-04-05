<template>
  <div v-if="show" class="alert" :style="{ backgroundColor }">
    <div>{{ message }}</div>
    <div @click="$emit('close')" class="button-close">&times;</div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  message: {
    type: String,
  },
  show: {
    required: true,
    type: Boolean,
  },
  variant: {
    default: "danger",
    type: String,
    validator(value) {
      const options = ["info", "success", "warning", "danger", "secondary"];
      return options.includes(value);
    },
  },
});

const emit = defineEmits(["close"]);

const backgroundColor = computed(() => {
  const options = {
    danger: "var(--danger-color)",
    info: "var(--info-color)",
    success: "var(--accent-color)",
    warning: "var(--warning-color)",
    secondary: "var(--secondary-color)",
  };

  return options[props.variant];
});
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
