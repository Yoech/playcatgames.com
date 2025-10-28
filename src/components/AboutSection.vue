<template>
  <section id="about" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            关于 PlayCatGames
          </h2>
          
          <div class="space-y-6 text-text-secondary leading-relaxed">
            <p class="text-lg">
              PlayCatGames 是您探索精彩猫咪游戏世界的终极目的地。我们精心策划了一系列免费的在线猫咪主题游戏，适合所有年龄段的玩家。
            </p>
            
            <p>
              从可爱的装扮游戏到刺激的街机冒险，从温馨的护理模拟到巧妙的解谜挑战，我们的游戏收藏涵盖了猫咪爱好者可能想要的一切。所有游戏都经过精心挑选，确保提供最佳的游戏体验。
            </p>
            
            <p>
              我们相信游戏应该是即时的、有趣的和易于访问的。这就是为什么我们所有的游戏都可以直接在您的浏览器中运行，无需下载或安装任何软件。只需点击并开始游戏！
            </p>
          </div>
          
          <!-- Features -->
          <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-text-primary font-medium">100% 免费游戏</span>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span class="text-text-primary font-medium">移动端友好</span>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <span class="text-text-primary font-medium">即时游戏</span>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <span class="text-text-primary font-medium">安全可靠</span>
            </div>
          </div>
        </div>
        
        <!-- Right Content -->
        <div class="relative">
          <!-- Main Image -->
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://img.poki-cdn.com/cdn-cgi/image/q=78,w=600,h=400,fit=cover,f=auto/ca44a85263258ec94b36c2b5bdc55c66/cats.png"
              alt="Cat Games Collection"
              class="w-full h-auto"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          <!-- Floating Cards -->
          <div class="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 transform rotate-[-5deg]">
            <div class="flex items-center space-x-2">
              <span class="text-2xl">🎮</span>
              <div>
                <div class="text-sm font-semibold text-text-primary">50+ 游戏</div>
                <div class="text-xs text-text-secondary">持续更新</div>
              </div>
            </div>
          </div>
          
          <div class="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 transform rotate-[5deg]">
            <div class="flex items-center space-x-2">
              <span class="text-2xl">⭐</span>
              <div>
                <div class="text-sm font-semibold text-text-primary">4.8/5 评分</div>
                <div class="text-xs text-text-secondary">玩家推荐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- FAQ Section -->
      <div class="mt-20">
        <h3 class="text-2xl font-bold text-text-primary text-center mb-12">常见问题</h3>
        
        <div class="max-w-3xl mx-auto space-y-6">
          <div
            v-for="faq in faqs"
            :key="faq.id"
            class="bg-gray-50 rounded-lg p-6"
          >
            <button
              @click="toggleFaq(faq.id)"
              class="w-full text-left flex items-center justify-between focus:outline-none"
            >
              <h4 class="text-lg font-semibold text-text-primary">{{ faq.question }}</h4>
              <svg
                :class="[
                  'w-5 h-5 text-text-secondary transition-transform duration-200',
                  openFaqs.includes(faq.id) ? 'transform rotate-180' : ''
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div
              v-show="openFaqs.includes(faq.id)"
              class="mt-4 text-text-secondary leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AboutSection',
  setup() {
    const openFaqs = ref([])
    
    const faqs = [
      {
        id: 1,
        question: '这些游戏真的免费吗？',
        answer: '是的！我们所有的猫咪游戏都是完全免费的。您无需支付任何费用即可享受所有游戏内容。'
      },
      {
        id: 2,
        question: '我需要下载任何软件吗？',
        answer: '不需要！所有游戏都可以直接在您的浏览器中运行。只需点击游戏即可开始游玩，无需下载或安装。'
      },
      {
        id: 3,
        question: '这些游戏适合什么年龄段？',
        answer: '我们的猫咪游戏适合所有年龄段的玩家。从简单的装扮游戏到具有挑战性的解谜游戏，每个人都能找到适合自己的游戏。'
      },
      {
        id: 4,
        question: '游戏支持移动设备吗？',
        answer: '是的！我们所有的游戏都经过优化，可以在PC、平板电脑和手机上完美运行。您可以随时随地享受游戏乐趣。'
      },
      {
        id: 5,
        question: '你们会添加新游戏吗？',
        answer: '当然！我们定期更新游戏库，添加新的有趣猫咪游戏。请经常回来查看最新的游戏内容。'
      }
    ]
    
    const toggleFaq = (id) => {
      const index = openFaqs.value.indexOf(id)
      if (index > -1) {
        openFaqs.value.splice(index, 1)
      } else {
        openFaqs.value.push(id)
      }
    }
    
    return {
      faqs,
      openFaqs,
      toggleFaq
    }
  }
}
</script>