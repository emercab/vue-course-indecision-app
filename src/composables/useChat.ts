import { sleep } from "@/helpers/sleep";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import type { YesNoResponse } from "@/interfaces/yes-no-response.interface";
import { ref } from "vue";

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);
  const urlApi = 'https://yesno.wtf/api';

  const getResponse = async () => {
    try {
      const resp = await fetch(urlApi);
      const data: YesNoResponse = await resp.json();

      return data;
    }
    catch (error) {
      throw new Error('Error fetching data from API');
    }
  }


  const addMessage = async (message: string) => {
    if (message.length === 0) return;

    messages.value.push({
      id: messages.value.length + 1,
      message,
      itsMine: true,
    });

    // Check if the message is a question to generate a response
    if (!message.endsWith('?')) return

    // Get response from API
    await sleep(1.5);
    const { answer, image } = await getResponse();

    // Add response to messages
    messages.value.push({
      id: messages.value.length + 1,
      message: answer,
      image,
      itsMine: false,
    });
  };

  return {
    // Properties
    messages,

    // Methods
    addMessage,
  }
}