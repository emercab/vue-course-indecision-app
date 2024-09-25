<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble message="Hola Mundo!" :itsMine="true" />
      <ChatBubble message="Hola bro" :itsMine="false" />
      <ChatBubble message="Como vas?" :itsMine="false" />
      <ChatBubble message="Excelente mi hermano" :itsMine="true" />
      <ChatBubble message="Me alegra" :itsMine="false" />
      <ChatBubble message="Necesito un favor tuyo." :itsMine="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ChatBubble from './ChatBubble.vue';
</script>

<style scoped></style>
