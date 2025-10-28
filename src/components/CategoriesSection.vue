<template>
  <section id="categories" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {{ $t('categories.title') }}
        </h2>
        <p class="text-lg text-text-secondary max-w-2xl mx-auto">
          {{ $t('categories.subtitle') }}
        </p>
      </div>
      
      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="category in categories"
          :key="category.id"
          class="bg-white rounded-xl shadow-game-card hover:shadow-game-card-hover transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden group flex flex-col h-full"
          @click="selectCategory(category)"
        >
          <!-- Category Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="category.image"
              :alt="category.name"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <h3 class="text-xl font-bold text-white mb-1">{{ $t(category.nameKey) }}</h3>
              <p class="text-sm text-gray-200">{{ category.gameCount }}+ {{ $t('categories.gameCount') }}</p>
            </div>
          </div>
          
          <!-- Category Info -->
          <div class="p-6 flex flex-col flex-grow">
            <p class="text-text-secondary mb-4 leading-relaxed">{{ $t(category.descriptionKey) }}</p>
            
            <!-- Featured Games -->
            <div class="mb-6 flex-grow">
              <h4 class="text-sm font-semibold text-text-primary mb-2">{{ $t('categories.featuredGames') }}:</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="game in category.featuredGames"
                  :key="game"
                  class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                >
                  {{ game }}
                </span>
              </div>
            </div>
            
            <!-- Action Button - Now at bottom -->
            <div class="mt-auto">
              <button
                class="w-full bg-primary hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                @click.stop="browseCategory(category)"
              >
                {{ $t('categories.browse') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Additional Info -->
      <div class="mt-16 bg-white rounded-2xl p-8 shadow-lg">
        <div class="text-center">
          <h3 class="text-2xl font-bold text-text-primary mb-4">{{ $t('categories.additional.title') }}</h3>
          <p class="text-text-secondary mb-6 max-w-3xl mx-auto">
            {{ $t('categories.additional.description') }}
          </p>
          <p class="text-lg font-medium text-primary">
            {{ $t('categories.additional.motto') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CategoriesSection',
  setup() {
    const categories = ref([
      {
        id: 1,
        nameKey: 'categories.types.dressUp.name',
        descriptionKey: 'categories.types.dressUp.description',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=400,h=300,fit=cover,f=auto/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.png',
        gameCount: 12,
        featuredGames: ['Funny Kitty Dressup', 'Cat Fashion Show', 'Kitty Makeover']
      },
      {
        id: 2,
        nameKey: 'categories.types.simulation.name',
        descriptionKey: 'categories.types.simulation.description',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=400,h=300,fit=cover,f=auto/b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7.png',
        gameCount: 15,
        featuredGames: ['Funny Kitty Care', 'Cat Life Simulator', 'My Virtual Cat']
      },
      {
        id: 3,
        nameKey: 'categories.types.puzzle.name',
        descriptionKey: 'categories.types.puzzle.description',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=400,h=300,fit=cover,f=auto/c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8.png',
        gameCount: 18,
        featuredGames: ['Cat Pizza', 'Cats Drop', 'Cat Tower Defense']
      },
      {
        id: 4,
        nameKey: 'categories.types.arcade.name',
        descriptionKey: 'categories.types.arcade.description',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=400,h=300,fit=cover,f=auto/d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9.png',
        gameCount: 10,
        featuredGames: ['Kitty Loves Birds', 'Catpad', 'Cat Run Adventure']
      }
    ])
    
    const selectCategory = (category) => {
      console.log('Selected category:', category.name)
      // TODO: Filter games by category
    }
    
    const browseCategory = (category) => {
      console.log('Browse category:', category.name)
      // TODO: Navigate to category page
    }
    
    return {
      categories,
      selectCategory,
      browseCategory
    }
  }
}
</script>