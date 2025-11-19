<template>
  <div class="game-play-container min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="loading-spinner mx-auto mb-4"></div>
        <p class="text-gray-600">{{ $t('common.loading') }}</p>
      </div>
    </div>

    <!-- Game Not Found -->
    <div v-else-if="!game" class="flex items-center justify-center min-h-screen">
      <div class="text-center max-w-md px-4">
        <div class="text-6xl mb-4">🐱</div>
        <h1 class="text-2xl font-bold text-gray-800 mb-2">{{ $t('gamePage.notFound.title') }}</h1>
        <p class="text-gray-600 mb-6">{{ $t('gamePage.notFound.message') }}</p>
        <router-link
          to="/"
          class="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
        >
          {{ $t('common.backToHome') }}
        </router-link>
      </div>
    </div>

    <!-- Game Player -->
    <div v-else class="flex flex-col h-screen">
      <!-- Game Header -->
      <header class="bg-white shadow-sm border-b sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <!-- Back Button & Game Info -->
            <div class="flex items-center space-x-4">
              <router-link
                to="/"
                class="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span class="hidden sm:inline">{{ $t('common.backToHome') }}</span>
              </router-link>
              
              <div class="border-l border-gray-300 h-6"></div>
              
              <div class="flex items-center space-x-3">
                <img 
                  :src="game.logo" 
                  :alt="game.name"
                  class="w-10 h-10 rounded-lg object-cover"
                  @error="handleImageError"
                />
                <div>
                  <h1 class="font-semibold text-gray-800">{{ game.name }}</h1>
                  <div class="flex items-center space-x-2 text-sm text-gray-500">
                    <span class="flex items-center">
                      <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      {{ game.rating }}
                    </span>
                    <span>•</span>
                    <span>{{ formatClicks(game.clickCount) }} {{ $t('gamePage.plays') }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center space-x-2">
              <!-- Fullscreen Button -->
              <button
                @click="toggleFullscreen"
                class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                :title="isFullscreen ? $t('gamePage.exitFullscreen') : $t('gamePage.enterFullscreen')"
              >
                <svg v-if="!isFullscreen" class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                </svg>
                <svg v-else class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              <!-- Share Button -->
              <button
                @click="shareGame"
                class="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <span class="text-sm font-medium text-gray-700">{{ $t('gamePage.share') }}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Game Frame Container -->
      <div ref="gameContainer" class="flex-1 bg-black relative">
        <!-- Cocos Creator Game Iframe -->
        <iframe
          v-if="gameUrl"
          ref="gameFrame"
          :src="gameUrl"
          class="w-full h-full border-0"
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          :sandbox="getSandboxAttr"
          @load="handleFrameLoad"
          @error="handleFrameError"
        ></iframe>
        
        <!-- Loading Overlay -->
        <div v-if="frameLoading" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div class="text-center text-white">
            <div class="loading-spinner mx-auto mb-4 border-white"></div>
            <p>{{ $t('gamePage.loadingGame') }}</p>
          </div>
        </div>

        <!-- Error Overlay -->
        <div v-if="frameError" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div class="text-center text-white max-w-md px-4">
            <div class="text-5xl mb-4">😿</div>
            <h3 class="text-xl font-bold mb-2">{{ $t('gamePage.loadError.title') }}</h3>
            <p class="text-gray-300 mb-6">{{ $t('gamePage.loadError.message') }}</p>
            <button
              @click="reloadGame"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              {{ $t('gamePage.reload') }}
            </button>
          </div>
        </div>
      </div>

      <!-- Game Info Footer (Mobile) -->
      <div class="sm:hidden bg-white border-t p-4">
        <p class="text-sm text-gray-600 line-clamp-2">{{ game.description }}</p>
        <div class="flex flex-wrap gap-2 mt-3">
          <span
            v-for="tag in game.tags.slice(0, 3)"
            :key="tag.id"
            :class="getTagClass(tag)"
            class="px-3 py-1 rounded-full text-xs font-medium"
          >
            {{ $t(`gameData.tags.${tag.id}`) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getGameById, incrementGameClicks } from '@/data/gamesData'
import { isExternalUrl, getIframeSandbox, convertGameUrlForDev } from '@/utils/urlHelpers'

export default {
  name: 'GamePlay',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { t } = useI18n()
    
    const loading = ref(true)
    const frameLoading = ref(true)
    const frameError = ref(false)
    const game = ref(null)
    const gameUrl = ref('')
    const isFullscreen = ref(false)
    const gameContainer = ref(null)
    const gameFrame = ref(null)

    // 判断URL是否为外部链接（使用工具函数）
    const isExternal = (url) => isExternalUrl(url)

    // 获取iframe sandbox属性
    const getSandboxAttr = computed(() => {
      return gameUrl.value ? getIframeSandbox(gameUrl.value) : ''
    })

    // 获取游戏数据
    const loadGame = () => {
      const gameId = parseInt(route.params.id)
      
      console.log('Route params:', route.params)
      console.log('Game ID:', gameId)
      
      if (isNaN(gameId)) {
        console.log('Invalid game ID')
        loading.value = false
        return
      }

      game.value = getGameById(gameId)
      
      console.log('Game found:', game.value)
      
      if (game.value) {
        // 增加点击次数
        incrementGameClicks(gameId)
        
        // 获取游戏URL - 直接使用完整URL
        const webLink = game.value.storeLinks?.web
        if (webLink) {
          gameUrl.value = webLink
          console.log('Game URL:', gameUrl.value)
        } else {
          frameError.value = true
        }

        // 更新页面标题
        document.title = `${game.value.name} - PlayCatGames`
      }
      
      loading.value = false
      console.log('Loading finished, loading value:', loading.value)
    }

    // 格式化点击数
    const formatClicks = (count) => {
      if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M'
      }
      if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K'
      }
      return count.toString()
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

    // iframe 加载完成
    const handleFrameLoad = () => {
      frameLoading.value = false
      frameError.value = false
      console.log('Game loaded successfully:', gameUrl.value)
    }

    // iframe 加载错误
    const handleFrameError = (error) => {
      frameLoading.value = false
      frameError.value = true
      console.error('Game loading error:', error)
    }

    // 重新加载游戏
    const reloadGame = () => {
      frameLoading.value = true
      frameError.value = false
      if (gameFrame.value) {
        gameFrame.value.src = gameUrl.value
      }
    }

    // 图片加载错误
    const handleImageError = (e) => {
      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNmM2Y0ZjYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+8J+QsTwvdGV4dD48L3N2Zz4='
    }

    // 全屏切换
    const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
        gameContainer.value?.requestFullscreen()
        isFullscreen.value = true
      } else {
        document.exitFullscreen()
        isFullscreen.value = false
      }
    }

    // 监听全屏变化
    const handleFullscreenChange = () => {
      isFullscreen.value = !!document.fullscreenElement
    }

    // 分享游戏
    const shareGame = async () => {
      const shareData = {
        title: game.value.name,
        text: game.value.description,
        url: window.location.href
      }

      try {
        if (navigator.share) {
          await navigator.share(shareData)
        } else {
          // 复制链接到剪贴板
          await navigator.clipboard.writeText(window.location.href)
          alert(t('gamePage.linkCopied'))
        }
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }

    onMounted(() => {
      loadGame()
      
      // iframe加载事件会通过@load和@error绑定处理
      
      // 监听全屏事件
      document.addEventListener('fullscreenchange', handleFullscreenChange)
      
      // 监听来自游戏的消息（Cocos Creator可以使用postMessage通信）
      window.addEventListener('message', handleGameMessage)
    })

    onUnmounted(() => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      window.removeEventListener('message', handleGameMessage)
    })

    // 处理来自游戏的消息
    const handleGameMessage = (event) => {
      // 可以处理Cocos Creator游戏发送的消息
      // 例如：游戏加载完成、分数更新等
      console.log('Message from game:', event.data)
    }

    return {
      loading,
      frameLoading,
      frameError,
      game,
      gameUrl,
      isFullscreen,
      gameContainer,
      gameFrame,
      isExternal,
      getSandboxAttr,
      formatClicks,
      getTagClass,
      reloadGame,
      handleImageError,
      toggleFullscreen,
      shareGame
    }
  }
}
</script>

<style scoped>
.game-play-container {
  user-select: none;
}

.loading-spinner {
  border: 3px solid #f3f4f6;
  border-top: 3px solid #8b5cf6;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
