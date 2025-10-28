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
            <p class="text-sm text-text-secondary mb-2 line-clamp-2">{{ $t(game.descriptionKey) }}</p>
            
            <!-- Rating and Category -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-yellow-400 text-sm">★</span>
                <span class="text-sm text-text-secondary ml-1">{{ game.rating }}</span>
              </div>
              <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                {{ $t(`games.gameCategories.${game.type}`) }}
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
import { useI18n } from 'vue-i18n'
import { gamesData, getPopularGames, getGamesByCategory, gameCategories, incrementGameClicks } from '@/data'

export default {
  name: 'GamesSection',
  setup() {
    const { t } = useI18n()
    const activeFilter = ref('all')
    const games = ref([])
    const visibleCount = ref(6)
    
    const filters = [
      { id: 'all', key: 'all' },
      { id: 'dress-up', key: 'dressUp', category: gameCategories.DRESS_UP },
      { id: 'care', key: 'care', category: gameCategories.CARE },
      { id: 'puzzle', key: 'puzzle', category: gameCategories.PUZZLE },
      { id: 'arcade', key: 'arcade', category: gameCategories.ARCADE },
      { id: 'simulation', key: 'simulation', category: gameCategories.SIMULATION }
    ]
    
    // Mock games data (similar to Poki's cat games)
    const mockGames = [
      {
        id: 1,
        title: 'Kitty Loves Birds',
        descriptionKey: 'gameData.descriptions.kittyLovesBirds',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/d19eec40e7e15ccf60bd734b83b03806.png',
        rating: '4.8',
        type: 'arcade'
      },
      {
        id: 2,
        title: 'Cat Pizza',
        descriptionKey: 'gameData.descriptions.catPizza',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/a4a95b8a0a094c17b4e6b21b0b35a3f4.png',
        rating: '4.7',
        type: 'simulation'
      },
      {
        id: 3,
        title: 'Funny Kitty Care',
        descriptionKey: 'gameData.descriptions.funnyKittyCare',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/b8c7e9d4f2a3c1b5e6f7d8c9a0b1c2d3.png',
        rating: '4.9',
        type: 'care'
      },
      {
        id: 4,
        title: 'Cats Drop',
        descriptionKey: 'gameData.descriptions.catsDrop',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9.png',
        rating: '4.6',
        type: 'puzzle'
      },
      {
        id: 5,
        title: 'Catpad',
        descriptionKey: 'gameData.descriptions.catpad',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7.png',
        rating: '4.5',
        type: 'arcade'
      },
      {
        id: 6,
        title: 'Funny Kitty Dressup',
        descriptionKey: 'gameData.descriptions.funnyKittyDressup',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3.png',
        rating: '4.8',
        type: 'dressUp'
      },
      {
        id: 7,
        title: 'Kitty Cats',
        descriptionKey: 'gameData.descriptions.kittyCats',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/f7e6d5c4b3a2f1e0d9c8b7a6f5e4d3c2.png',
        rating: '4.4',
        type: 'simulation'
      },
      {
        id: 8,
        title: 'Dual Cat',
        descriptionKey: 'gameData.descriptions.dualCat',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6.png',
        rating: '4.7',
        type: 'puzzle'
      },
      {
        id: 9,
        title: 'Funny Kitty Haircut',
        descriptionKey: 'gameData.descriptions.funnyKittyHaircut',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0.png',
        rating: '4.6',
        type: 'care'
      },
      {
        id: 10,
        title: 'Cat Coffee Shop',
        descriptionKey: 'gameData.descriptions.catCoffeeShop',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=408,h=408,fit=cover,f=auto/c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3.png',
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
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>