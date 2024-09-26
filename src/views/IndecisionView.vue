<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <ChatContainer>
    <ChatHeader title="Hija querida" />

    <ChatMessages :messages="messages" />

    <MessageBox @new-message="addMessage" />
  </ChatContainer>
</template>

<script setup lang="ts">
  import ChatContainer from "@/components/chat/ChatContainer.vue";
  import ChatHeader from "@/components/chat/ChatHeader.vue";
  import ChatMessages from "@/components/chat/ChatMessages.vue";
  import MessageBox from "@/components/chat/MessageBox.vue";
  import { useChat } from "@/composables/useChat";

  const { messages, addMessage } = useChat();
</script>
