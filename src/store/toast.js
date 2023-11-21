import { defineStore } from 'pinia'
import { ref } from 'vue'

const TOAST_TIMEOUT = 3000

export const useToastStore = defineStore('toast', () => {
  const isShown = ref(false)
  const intent = ref('success')
  const message = ref('Alert message!')

  let timeoutId

  /**
   *
   * @param {Object} options
   * @param {'success'|'error'} options.intent
   * @param {string} options.message
   *
   */
  function show(options) {
    isShown.value = true
    intent.value = options.intent
    message.value = options.message

    timeoutId = setTimeout(hide, TOAST_TIMEOUT)
  }

  function hide() {
    isShown.value = false
    intent.value = 'success'
    message.value = ''

    if (timeoutId) clearTimeout(timeoutId)
  }

  return {
    isShown,
    intent,
    message,
    show,
    hide
  }
})
