<template>
  <div class="relative">
    <div class="relative">
      <input
        ref="searchInput"
        type="text"
        :placeholder="$t('search.placeholder')"
        v-model="localQuery"
        @input="handleInput"
        @focus="showSuggestions = true"
        @blur="handleBlur"
        @keydown.escape="hideSuggestions"
        @keydown.arrow-down.prevent="navigateSuggestions(1)"
        @keydown.arrow-up.prevent="navigateSuggestions(-1)"
        @keydown.enter.prevent="selectSuggestion"
        :class="[
          'w-64 px-4 py-2 pr-10 border border-gray-300 rounded-full transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
          showSuggestions && suggestions.length > 0 ? 'rounded-b-none' : ''
        ]"
      />
      
      <!-- Search Icon -->
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
        <svg 
          v-if="!localQuery" 
          class="h-5 w-5 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        
        <!-- Clear Icon -->
        <button
          v-else
          @click="clearSearch"
          class="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Search Suggestions -->
    <div
      v-if="showSuggestions && suggestions.length > 0"
      class="absolute top-full left-0 right-0 bg-white border border-t-0 border-gray-300 rounded-b-lg shadow-lg z-50 max-h-64 overflow-y-auto"
    >
      <div
        v-for="(suggestion, index) in suggestions"
        :key="`${suggestion.type}-${suggestion.value}`"
        @mousedown.prevent="selectSuggestionByIndex(index)"
        :class="[
          'px-4 py-3 cursor-pointer flex items-center space-x-3 border-b border-gray-100 last:border-b-0',
          'hover:bg-gray-50 transition-colors',
          selectedIndex === index ? 'bg-primary-light text-primary' : 'text-gray-700'
        ]"
      >
        <!-- Suggestion Icon -->
        <div class="flex-shrink-0">
          <svg v-if="suggestion.type === 'game'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
          </svg>
          <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </div>
        
        <!-- Suggestion Text -->
        <div class="flex-1">
          <div class="font-medium">{{ suggestion.text }}</div>
          <div v-if="suggestion.type === 'game' && suggestion.game" class="text-xs text-gray-500 truncate">
            {{ suggestion.game.description }}
          </div>
        </div>
        
        <!-- Suggestion Type Badge -->
        <div class="flex-shrink-0">
          <span 
            :class="[
              'px-2 py-1 text-xs rounded-full',
              suggestion.type === 'game' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
            ]"
          >
            {{ suggestion.type === 'game' ? $t('search.suggestions.game') : $t('search.suggestions.tag') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, nextTick } from 'vue'
import { useSearch } from '@/stores/search'

export default {
  name: 'SearchBox',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md',
      validator: value => ['sm', 'md', 'lg'].includes(value)
    }
  },
  setup() {
    const { searchQuery, searchSuggestions, setSearchQuery, clearSearch: clearGlobalSearch } = useSearch()
    
    const searchInput = ref(null)
    const localQuery = ref('')
    const showSuggestions = ref(false)
    const selectedIndex = ref(-1)
    
    // 计算建议列表
    const suggestions = computed(() => searchSuggestions.value)
    
    // 处理输入
    const handleInput = () => {
      setSearchQuery(localQuery.value)
      selectedIndex.value = -1
      showSuggestions.value = true
      
      // 滚动到游戏区域
      if (localQuery.value) {
        nextTick(() => {
          const gamesSection = document.getElementById('games')
          if (gamesSection) {
            gamesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        })
      }
    }
    
    // 处理失焦
    const handleBlur = () => {
      // 延迟隐藏，以便点击建议项
      setTimeout(() => {
        showSuggestions.value = false
        selectedIndex.value = -1
      }, 200)
    }
    
    // 隐藏建议
    const hideSuggestions = () => {
      showSuggestions.value = false
      selectedIndex.value = -1
      searchInput.value?.blur()
    }
    
    // 导航建议列表
    const navigateSuggestions = (direction) => {
      if (suggestions.value.length === 0) return
      
      const maxIndex = suggestions.value.length - 1
      
      if (direction > 0) {
        selectedIndex.value = selectedIndex.value >= maxIndex ? 0 : selectedIndex.value + 1
      } else {
        selectedIndex.value = selectedIndex.value <= 0 ? maxIndex : selectedIndex.value - 1
      }
    }
    
    // 选择建议项
    const selectSuggestion = () => {
      if (selectedIndex.value >= 0 && suggestions.value[selectedIndex.value]) {
        selectSuggestionByIndex(selectedIndex.value)
      }
    }
    
    // 根据索引选择建议项
    const selectSuggestionByIndex = (index) => {
      const suggestion = suggestions.value[index]
      if (suggestion) {
        localQuery.value = suggestion.text
        setSearchQuery(suggestion.value)
        hideSuggestions()
        
        // 如果是游戏建议，可以直接跳转到游戏
        if (suggestion.type === 'game' && suggestion.game) {
          nextTick(() => {
            const gamesSection = document.getElementById('games')
            if (gamesSection) {
              gamesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          })
        }
      }
    }
    
    // 清空搜索
    const clearSearch = () => {
      localQuery.value = ''
      clearGlobalSearch()
      hideSuggestions()
    }
    
    // 监听全局搜索查询变化
    watch(searchQuery, (newQuery) => {
      if (newQuery !== localQuery.value) {
        localQuery.value = newQuery
      }
    }, { immediate: true })
    
    return {
      searchInput,
      localQuery,
      showSuggestions,
      selectedIndex,
      suggestions,
      handleInput,
      handleBlur,
      hideSuggestions,
      navigateSuggestions,
      selectSuggestion,
      selectSuggestionByIndex,
      clearSearch
    }
  }
}
</script>

<style scoped>
/* 确保建议框在其他元素之上 */
.relative {
  position: relative;
}
</style>