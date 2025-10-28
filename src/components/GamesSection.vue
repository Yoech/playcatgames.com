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
          @click="activeFilter = filter.id"
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
          v-for="game in filteredGames"
          :key="game.id"
          class="game-card bg-white rounded-xl shadow-game-card hover:shadow-game-card-hover cursor-pointer overflow-hidden group"
          @click="playGame(game)"
        >
          <!-- Game Image -->
          <div class="relative aspect-square overflow-hidden">
            <img
              :src="game.image"
              :alt="game.title"
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
          </div>
          
          <!-- Game Info -->
          <div class="p-4">
            <h3 class="font-semibold text-text-primary mb-1 truncate">{{ game.title }}</h3>
            <p class="text-sm text-text-secondary mb-2 line-clamp-2">{{ game.description }}</p>
            
            <!-- Rating and Category -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-yellow-400 text-sm">★</span>
                <span class="text-sm text-text-secondary ml-1">{{ game.rating }}</span>
              </div>
              <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                {{ game.category }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Load More Button -->
      <div class="text-center mt-12">
                  <button
            @click="loadMoreGames"
            class="bg-primary hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            {{ $t('games.loadMore') }}
          </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'GamesSection',
  setup() {
    const activeFilter = ref('all')
    const games = ref([])
    
    const filters = [
      { id: 'all', key: 'all' },
      { id: 'dress-up', key: 'dressUp' },
      { id: 'care', key: 'care' },
      { id: 'puzzle', key: 'puzzle' },
      { id: 'arcade', key: 'arcade' },
      { id: 'simulation', key: 'simulation' }
    ]
    
    // Mock games data (similar to Poki's cat games)
    const mockGames = [
      {
        id: 1,
        title: 'Kitty Loves Birds',
        description: '帮助小猫咪捕捉飞鸟，展现你的反应速度',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/d19eec40e7e15ccf60bd734b83b03806.png',
        category: '街机',
        rating: '4.8',
        type: 'arcade'
      },
      {
        id: 2,
        title: 'Cat Pizza',
        description: '经营一家猫咪比萨店，为顾客制作美味比萨',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/a4a95b8a0a094c17b4e6b21b0b35a3f4.png',
        category: '模拟',
        rating: '4.7',
        type: 'simulation'
      },
      {
        id: 3,
        title: 'Funny Kitty Care',
        description: '照顾可爱的小猫咪，喂食、洗澡和游戏',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/b8c7e9d4f2a3c1b5e6f7d8c9a0b1c2d3.png',
        category: '护理',
        rating: '4.9',
        type: 'care'
      },
      {
        id: 4,
        title: 'Cats Drop',
        description: '叠猫咪游戏，测试你的平衡和策略技巧',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9.png',
        category: '解谜',
        rating: '4.6',
        type: 'puzzle'
      },
      {
        id: 5,
        title: 'Catpad',
        description: '可爱的猫咪平台跳跃游戏',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7.png',
        category: '街机',
        rating: '4.5',
        type: 'arcade'
      },
      {
        id: 6,
        title: 'Funny Kitty Dressup',
        description: '为可爱的小猫咪打扮，选择各种服装和配饰',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3.png',
        category: '装扮',
        rating: '4.8',
        type: 'dress-up'
      },
      {
        id: 7,
        title: 'Kitty Cats',
        description: '与多只可爱猫咪互动的休闲游戏',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/f7e6d5c4b3a2f1e0d9c8b7a6f5e4d3c2.png',
        category: '模拟',
        rating: '4.4',
        type: 'simulation'
      },
      {
        id: 8,
        title: 'Dual Cat',
        description: '控制两只猫咪同时闯关的挑战游戏',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6.png',
        category: '解谜',
        rating: '4.7',
        type: 'puzzle'
      },
      {
        id: 9,
        title: 'Funny Kitty Haircut',
        description: '为小猫咪设计时尚发型的美容游戏',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0.png',
        category: '护理',
        rating: '4.6',
        type: 'care'
      },
      {
        id: 10,
        title: 'Cat Coffee Shop',
        description: '经营猫咪咖啡店，制作美味饮品',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3.png',
        category: '模拟',
        rating: '4.5',
        type: 'simulation'
      }
    ]
    
    const filteredGames = computed(() => {
      if (activeFilter.value === 'all') {
        return games.value
      }
      return games.value.filter(game => game.type === activeFilter.value)
    })
    
    const loadMoreGames = () => {
      // Mock loading more games
      console.log('Loading more games...')
    }
    
    const playGame = (game) => {
      // Mock game launch
      console.log('Launching game:', game.title)
      alert(`启动游戏: ${game.title}`)
    }
    
    onMounted(() => {
      games.value = mockGames
    })
    
    return {
      activeFilter,
      filters,
      games,
      filteredGames,
      loadMoreGames,
      playGame
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>