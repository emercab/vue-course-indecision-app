<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div class="">
      <button @click="decrement">-1</button>
      <button @click="increment">+1</button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useCounter } from "@/composables/useCounter";

  interface Props {
    initialValue?: number;
  }

  const props = withDefaults(defineProps<Props>(), {
    initialValue: 5,
  });

  const { counter, squareCounter, decrement, increment } = useCounter(props.initialValue);
</script>

<style scoped></style>
