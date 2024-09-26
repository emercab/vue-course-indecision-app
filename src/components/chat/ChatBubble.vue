<template>
  <div :class="messageStyle">
    <div class="text-black p-2 rounded-lg max-w-xs" :class="bgStyle">
      <!-- Message -->
      <span class=""> {{ message }} </span>

      <!-- Image if exists -->
      <img v-if="image" :src="image" alt="YesNoImage" class="w-28 h-28 object-cover rounded-md" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  interface Props {
    message: string;
    itsMine: boolean;
    image?: string;
  }

  const props = defineProps<Props>();

  const bgStyle = computed(() => (props.itsMine ? "bg-blue-200" : "bg-gray-300"));

  const messageStyle = computed(() => (props.itsMine ? "flex justify-end" : "flex"));
</script>

<style scoped></style>
