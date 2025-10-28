<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-2xl">🐱</span>
            <h1 class="ml-2 text-xl font-bold text-primary">{{ $t('brand') }}</h1>
          </div>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#games" class="text-text-primary hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              {{ $t('nav.games') }}
            </a>
            <a href="#categories" class="text-text-primary hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              {{ $t('nav.categories') }}
            </a>
            <a href="#about" class="text-text-primary hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              {{ $t('nav.about') }}
            </a>
          </div>
        </nav>
        
        <!-- Right Side Actions -->
        <div class="flex items-center space-x-4">
          <!-- Search Bar -->
          <div class="hidden sm:block relative">
            <input
              type="text"
              :placeholder="$t('search.placeholder')"
              v-model="searchQuery"
              @input="handleSearch"
              class="w-64 px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          
          <!-- Language Selector -->
          <LanguageSelector />
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="toggleMobileMenu"
              class="text-text-primary hover:text-primary focus:outline-none focus:text-primary"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          <a href="#games" class="block px-3 py-2 text-base font-medium text-text-primary hover:text-primary">
            {{ $t('nav.games') }}
          </a>
          <a href="#categories" class="block px-3 py-2 text-base font-medium text-text-primary hover:text-primary">
            {{ $t('nav.categories') }}
          </a>
          <a href="#about" class="block px-3 py-2 text-base font-medium text-text-primary hover:text-primary">
            {{ $t('nav.about') }}
          </a>
          
          <!-- Mobile Search -->
          <div class="px-3 py-2">
            <input
              type="text"
              :placeholder="$t('search.placeholder')"
              v-model="searchQuery"
              @input="handleSearch"
              class="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <!-- Mobile Language Selector -->
          <div class="px-3 py-2">
            <div class="text-sm font-medium text-text-secondary mb-2">{{ $t('common.language') }}</div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
import LanguageSelector from './LanguageSelector.vue'

export default {
  name: 'Header',
  components: {
    LanguageSelector
  },
  setup() {
    const mobileMenuOpen = ref(false)
    const searchQuery = ref('')
    
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    
    const handleSearch = () => {
      // TODO: Implement search functionality
      console.log('Searching for:', searchQuery.value)
    }
    
    return {
      mobileMenuOpen,
      searchQuery,
      toggleMobileMenu,
      handleSearch
    }
  }
}
</script>