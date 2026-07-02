<template>
  <div v-if="visible" class="chat-modal-overlay" @click.self="emit('close')">
    <div class="chat-modal">
      <div class="chat-modal-header">
        <h3>在线客服</h3>
        <button class="chat-modal-close" @click="emit('close')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="chat-modal-body">
        <div class="chat-messages" ref="chatMessagesRef">
          <div
            v-for="message in chatMessages"
            :key="message.id"
            class="chat-message"
            :class="message.type"
          >
            <div class="chat-message-avatar">
              <template v-if="message.type === 'bot'">🤖</template>
              <template v-else>👤</template>
            </div>
            <div class="chat-message-content">
              {{ message.content }}
            </div>
          </div>
        </div>
        <div class="chat-input-area">
          <input
            type="text"
            class="chat-input"
            placeholder="输入您的问题..."
            v-model="chatInput"
            @keyup.enter="sendChatMessage"
          >
          <button class="chat-send-btn" @click="sendChatMessage">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const chatInput = ref('')
const chatMessagesRef = ref<HTMLElement | null>(null)
const chatMessages = ref([
  {
    id: 1,
    type: 'bot',
    content: '您好！我是华启天成智能客服，很高兴为您服务。请问有什么可以帮助您？',
    timestamp: new Date().toLocaleTimeString()
  }
])

const sendChatMessage = () => {
  if (!chatInput.value.trim()) return

  chatMessages.value.push({
    id: Date.now(),
    type: 'user',
    content: chatInput.value.trim(),
    timestamp: new Date().toLocaleTimeString()
  })

  chatInput.value = ''

  nextTick(() => {
    if (chatMessagesRef.value) {
      chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight
    }
  })

  setTimeout(() => {
    chatMessages.value.push({
      id: Date.now() + 1,
      type: 'bot',
      content: '感谢您的咨询！我们的客服人员将尽快回复您。请问还有其他问题吗？',
      timestamp: new Date().toLocaleTimeString()
    })

    nextTick(() => {
      if (chatMessagesRef.value) {
        chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight
      }
    })
  }, 1000)
}
</script>

<style scoped>
/* 在线客服弹窗 */
.chat-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
}

.chat-modal {
  width: 400px;
  height: 500px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.chat-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: linear-gradient(135deg, #00D4ff 0%, #0099cc 100%);
  color: white;
}

.chat-modal-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.chat-modal-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.chat-modal-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.chat-message {
  display: flex;
  gap: 12px;
  max-width: 85%;
}

.chat-message.bot {
  align-self: flex-start;
}

.chat-message.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.chat-message-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.chat-message.user .chat-message-avatar {
  background: #00D4ff;
  color: white;
}

.chat-message-content {
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.5;
}

.chat-message.bot .chat-message-content {
  background: #f5f5f5;
  color: #333;
  border-bottom-left-radius: 4px;
}

.chat-message.user .chat-message-content {
  background: #00D4ff;
  color: white;
  border-bottom-right-radius: 4px;
}

.chat-input-area {
  padding: 16px 20px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 12px;
  background: #fafafa;
}

.chat-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.chat-input:focus {
  border-color: #00D4ff;
}

.chat-send-btn {
  padding: 12px 24px;
  background: #00D4ff;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.chat-send-btn:hover {
  background: #0099cc;
}

/* 手机端客服弹窗调整 */
@media (max-width: 768px) {
  .chat-modal {
    width: 90%;
    height: 50vh;
    margin: 15px;
  }

  .chat-modal-header {
    padding: 12px 16px;
  }

  .chat-modal-header h3 {
    font-size: 16px;
  }

  .chat-messages {
    padding: 16px;
  }

  .chat-input-area {
    padding: 12px 16px;
  }
}

/* 小屏手机 */
@media (max-width: 480px) {
  .chat-modal {
    width: 92%;
    height: 45vh;
    margin: 10px;
  }

  .chat-modal-header {
    padding: 10px 14px;
  }

  .chat-messages {
    padding: 12px;
  }

  .chat-message {
    max-width: 90%;
  }

  .chat-input-area {
    padding: 10px 14px;
  }

  .chat-input {
    padding: 10px 14px;
    font-size: 13px;
  }

  .chat-send-btn {
    padding: 10px 18px;
    font-size: 13px;
  }
}
</style>
