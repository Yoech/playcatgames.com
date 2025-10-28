<template>
  <section id="categories" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          游戏分类
        </h2>
        <p class="text-lg text-text-secondary max-w-2xl mx-auto">
          每个猫咪游戏都围绕玩家最喜欢的活动而设计：装扮、照料或穿越有趣的关卡
        </p>
      </div>
      
      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="category in categories"
          :key="category.id"
          class="bg-white rounded-xl shadow-game-card hover:shadow-game-card-hover transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden group"
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
              <h3 class="text-xl font-bold text-white mb-1">{{ category.name }}</h3>
              <p class="text-sm text-gray-200">{{ category.gameCount }}+ 游戏</p>
            </div>
          </div>
          
          <!-- Category Info -->
          <div class="p-6">
            <p class="text-text-secondary mb-4 leading-relaxed">{{ category.description }}</p>
            
            <!-- Featured Games -->
            <div class="mb-4">
              <h4 class="text-sm font-semibold text-text-primary mb-2">热门游戏:</h4>
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
            
            <!-- Action Button -->
            <button
              class="w-full bg-primary hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              @click.stop="browseCategory(category)"
            >
              浏览分类
            </button>
          </div>
        </div>
      </div>
      
      <!-- Additional Info -->
      <div class="mt-16 bg-white rounded-2xl p-8 shadow-lg">
        <div class="text-center">
          <h3 class="text-2xl font-bold text-text-primary mb-4">探索更多猫咪游戏类型</h3>
          <p class="text-text-secondary mb-6 max-w-3xl mx-auto">
            我们的猫咪游戏收藏涵盖了每种心情和喜好：时尚游戏、宠物护理、巧妙谜题或有趣的街机奔跑。
            我们基于浏览器的猫咪游戏是免费、安全的，并且可以在几秒钟内开始游戏。
          </p>
          <p class="text-lg font-medium text-primary">
            只需选择一个游戏，点击开始，让乐趣开始喵叫吧！
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
        name: '猫咪装扮游戏',
        description: '猫咪装扮游戏让您的创造力尽情发挥。混搭服装、添加配饰，解锁从奇幻套装到季节装备的主题造型。',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=400,h=300,fit=cover,f=auto/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.png',
        gameCount: 12,
        featuredGames: ['Funny Kitty Dressup', 'Cat Fashion Show', 'Kitty Makeover']
      },
      {
        id: 2,
        name: '猫咪模拟和角色扮演',
        description: '在模拟游戏中，您将进入猫咪的爪子。漫游、探索，过着好奇小猫的生活。',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=400,h=300,fit=cover,f=auto/b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7.png',
        gameCount: 15,
        featuredGames: ['Funny Kitty Care', 'Cat Life Simulator', 'My Virtual Cat']
      },
      {
        id: 3,
        name: '猫咪管理和解谜游戏',
        description: '对于策略爱好者，猫咪解谜和管理游戏提供巧妙的转折。平衡多只猫咪，解决棘手的叠放挑战。',
        image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,w=400,h=300,fit=cover,f=auto/c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8.png',
        gameCount: 18,
        featuredGames: ['Cat Pizza', 'Cats Drop', 'Cat Tower Defense']
      },
      {
        id: 4,
        name: '猫咪街机和动作游戏',
        description: '快节奏的猫咪街机游戏，测试您的反应速度和敏捷性。跳跃、奔跑、捕捉，享受刺激的游戏体验。',
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