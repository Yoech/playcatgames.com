<template>
  <div class="relative">
    <!-- Language Selector Button -->
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
      :class="{ 'bg-gray-100': isOpen }"
    >
      <span class="text-lg">{{ currentLanguage.flag }}</span>
      <span class="text-sm font-medium text-text-primary hidden sm:block">{{ currentLanguage.name }}</span>
      <svg 
        class="w-4 h-4 text-text-secondary transition-transform duration-200"
        :class="{ 'transform rotate-180': isOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    
    <!-- Dropdown Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        class="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
        @click.stop
      >
        <div class="px-3 py-2 text-xs font-semibold text-text-secondary uppercase tracking-wider border-b border-gray-100 mb-1">
          {{ $t('common.language') }}
        </div>
        
        <button
          v-for="language in languages"
          :key="language.code"
          @click="changeLanguage(language.code)"
          class="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors duration-150"
          :class="{ 'bg-primary bg-opacity-10 text-primary': currentLocale === language.code }"
        >
          <span class="text-lg">{{ language.flag }}</span>
          <span class="text-sm font-medium">{{ language.name }}</span>
          <svg 
            v-if="currentLocale === language.code"
            class="w-4 h-4 ml-auto text-primary" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </transition>
    
    <!-- Backdrop -->
    <div
      v-if="isOpen"
      @click="closeDropdown"
      class="fixed inset-0 z-40"
    ></div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { languages } from '../locales/index.js'

export default {
  name: 'LanguageSelector',
  setup() {
    const { locale } = useI18n()
    const isOpen = ref(false)
    
    const currentLocale = computed(() => locale.value)
    const currentLanguage = computed(() => 
      languages.find(lang => lang.code === currentLocale.value) || languages[0]
    )
    
    const toggleDropdown = () => {
      isOpen.value = !isOpen.value
    }
    
    const closeDropdown = () => {
      isOpen.value = false
    }
    
    const changeLanguage = (langCode) => {
      locale.value = langCode
      localStorage.setItem('language', langCode)
      closeDropdown()
      
      // 可选：刷新页面以确保所有组件都更新
      // window.location.reload()
    }
    
    // 点击外部关闭下拉菜单
    const handleClickOutside = (event) => {
      if (isOpen.value && !event.target.closest('.relative')) {
        closeDropdown()
      }
    }
    
    // ESC键关闭下拉菜单
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen.value) {
        closeDropdown()
      }
    }
    
    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscKey)
    })
    
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscKey)
    })
    
    return {
      isOpen,
      currentLocale,
      currentLanguage,
      languages,
      toggleDropdown,
      closeDropdown,
      changeLanguage
    }
  }
}
</script>