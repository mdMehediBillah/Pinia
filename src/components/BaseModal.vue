<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="modalActive"
        class="absolute w-full bg-black bg-opacity-30 h-screen top-0 flex justify-center px-8"
      >
        <Transition name="modal-inner">
          <div
            v-if="modalActive"
            class="p-4 bg-white self-start rounded-lg mt-32 max-w-screen-md"
          >
            <slot />
            <button
              class="text-white mt-8 bg-cyan-700 py-2 px-6"
              @click="$emit('close')"
            >
              close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineEmits(["close"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>
.modal-outer-enter-active, .modal-outer-leave-active { transition: opacity 0.3s
cubic-bezier(0.52, 0.02, 0.19, 1.02); } .modal-outer-enter-from,
.modal-outer-leave-to { opacity: 0; } .modal-inner-enter-active,{ transition:
all transform 0.3s}
<style scoped></style>
