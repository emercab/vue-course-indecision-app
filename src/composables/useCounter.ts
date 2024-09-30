import { computed, ref } from "vue"

export const useCounter = (initialValue: number) => {
  const counter = ref(initialValue)
  const squareCounter = computed(() => counter.value ** 2)

  return {
    counter,
    squareCounter,
    increment: () => counter.value++,
    decrement: () => counter.value--,
  }

}