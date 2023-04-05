<template>
  <div ref="modal" v-show="show" class="modal" role="alert">
    <div class="modal-content">
      <slot name="header" />
      <slot name="body" />
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>

import {ref, reactive, onMounted, onBeforeUnmount} from "vue";

const props = defineProps({
        show: {
            default: false,
            type: Boolean
        }
    });

const emit = defineEmits(['close']);

const modal = ref(null);

const clickListener = reactive((e) => {
    if(e.target === modal.value) {
        emit('close');
    }
})

const pulseEscape = reactive((e) => {
    if(e.key === "Escape") {
        emit('close');
    }
});

onMounted(() => {
        window.addEventListener('click', clickListener);
        window.addEventListener('keydown', pulseEscape);
    });

onBeforeUnmount(() => {
        window.removeEventListener('click', clickListener);
        window.removeEventListener('keydown', pulseEscape);
    });

</script>

<style scoped>
.modal {
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.modal-content {
  position: relative;
  background-color: var(--bg-color);
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
