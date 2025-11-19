<template>
  <section id="games" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {{ $t('games.title') }}
        </h2>
        <p class="text-lg text-text-secondary max-w-2xl mx-auto">
          {{ $t('games.subtitle') }}
        </p>
      </div>
      
      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center mb-8 space-x-2 space-y-2 md:space-y-0">
        <button
          v-for="filter in filters"
          :key="filter.id"
          @click="setFilter(filter.id)"
          :class="[
            'px-6 py-2 rounded-full font-medium transition-all duration-300',
            activeFilter === filter.id
              ? 'bg-primary text-white shadow-lg'
              : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
          ]"
        >
          {{ $t(`games.filters.${filter.key}`) }}
        </button>
      </div>
      
      <!-- Games Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div
          v-for="game in displayedGames"
          :key="game.id"
          class="game-card bg-white rounded-xl shadow-game-card hover:shadow-game-card-hover cursor-pointer overflow-hidden group transition-all duration-300"
          @click="playGame(game)"
        >
          <!-- Game Image -->
          <div class="relative aspect-square overflow-hidden">
            <img
              :src="game.logo"
              :alt="game.name"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div class="transform scale-0 group-hover:scale-100 transition-transform duration-300 bg-white bg-opacity-90 rounded-full p-3">
                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            
            <!-- Rating Badge -->
            <div class="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full flex items-center">
              <svg class="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              {{ game.rating }}
            </div>
          </div>
          
          <!-- Game Info -->
          <div class="p-4">
            <h3 class="font-bold text-text-primary mb-2 line-clamp-1">{{ $t(game.nameKey) || game.name }}</h3>
            <p class="text-sm text-text-secondary mb-3 line-clamp-2">{{ $t(game.descriptionKey) || game.description }}</p>
            
            <!-- Game Tags -->
            <div class="flex flex-wrap gap-1 mb-3">
              <span
                v-for="tag in game.tags.slice(0, 2)"
                :key="tag.id"
                :class="getTagClass(tag)"
                class="text-xs px-2 py-1 rounded-full font-medium"
              >
                {{ $t(`gameTags.${tag.id}`) || tag.id }}
              </span>
            </div>
            
            <!-- Play Stats -->
            <div class="flex items-center justify-between text-xs text-text-secondary">
              <span class="flex items-center">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
                {{ game.clickCount.toLocaleString() }}
              </span>
              <span class="text-primary font-medium">{{ $t(`gameCategories.${game.category}`) || game.category }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Load More Button -->
      <div class="text-center mt-12" v-if="canLoadMore">
        <button
          @click="loadMoreGames"
          class="bg-primary hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          {{ $t('games.loadMore') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { gamesData, getPopularGames, getGamesByCategory, gameCategories, incrementGameClicks } from '@/data/gamesData'
import { useSearch } from '@/stores/search'

export default {
  name: 'GamesSection',
  setup() {
    const { t } = useI18n()
    const { filteredGames, setActiveCategory, activeCategory } = useSearch()
    
    const activeFilter = ref('all')
    const visibleCount = ref(6)
    
    // 过滤器配置
    const filters = [
      { id: 'all', key: 'all' },
      { id: gameCategories.PUZZLE, key: 'puzzle' },
      { id: gameCategories.SIMULATION, key: 'simulation' },
      { id: gameCategories.DRESS_UP, key: 'dressUp' },
      { id: gameCategories.CARE, key: 'care' },
      { id: gameCategories.ARCADE, key: 'arcade' },
      { id: gameCategories.ACTION, key: 'action' }
    ]
    
    // 显示的游戏（结合搜索和分类过滤）
    const displayedGames = computed(() => {
      return filteredGames.value.slice(0, visibleCount.value)
    })
    
    // 是否可以加载更多
    const canLoadMore = computed(() => {
      return visibleCount.value < filteredGames.value.length
    })
    
    // 游戏点击处理
    const playGame = (game) => {
      // 在新窗口打开游戏试玩页面
      const gameUrl = `/play/${game.id}`
      window.open(gameUrl, '_blank', 'noopener,noreferrer')
    }
    
    // 获取标签颜色类
    const getTagClass = (tag) => {
      const colorMap = {
        pink: 'bg-pink-100 text-pink-700',
        purple: 'bg-purple-100 text-purple-700',
        gray: 'bg-gray-100 text-gray-700',
        yellow: 'bg-yellow-100 text-yellow-700',
        green: 'bg-green-100 text-green-700',
        red: 'bg-red-100 text-red-700',
        blue: 'bg-blue-100 text-blue-700',
        indigo: 'bg-indigo-100 text-indigo-700',
        orange: 'bg-orange-100 text-orange-700',
        amber: 'bg-amber-100 text-amber-700',
        cyan: 'bg-cyan-100 text-cyan-700',
        teal: 'bg-teal-100 text-teal-700',
        stone: 'bg-stone-100 text-stone-700',
        emerald: 'bg-emerald-100 text-emerald-700'
      }
      return colorMap[tag.color] || 'bg-gray-100 text-gray-700'
    }
    
    // 设置过滤器
    const setFilter = (filterId) => {
      activeFilter.value = filterId
      setActiveCategory(filterId)
      visibleCount.value = 6 // 重置显示数量
    }
    
    // 加载更多游戏
    const loadMoreGames = () => {
      visibleCount.value += 6
    }
    
    // 监听搜索变化，重置可见数量
    watch(filteredGames, () => {
      visibleCount.value = 6
    })
    
    return {
      t,
      activeFilter,
      filters,
      displayedGames,
      canLoadMore,
      setFilter,
      loadMoreGames,
      playGame,
      getTagClass
    }
  }
}
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>