<template>
  <section id="about" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            {{ $t('about.title') }}
          </h2>
          
          <div class="space-y-6 text-text-secondary leading-relaxed">
            <p 
              v-for="(paragraph, index) in $t('about.description')" 
              :key="index"
              :class="index === 0 ? 'text-lg' : ''"
            >
              {{ paragraph }}
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
              <span class="text-text-primary font-medium">{{ $t('about.features.free') }}</span>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span class="text-text-primary font-medium">{{ $t('about.features.mobile') }}</span>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <span class="text-text-primary font-medium">{{ $t('about.features.instant') }}</span>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <span class="text-text-primary font-medium">{{ $t('about.features.safe') }}</span>
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
                <div class="text-sm font-semibold text-text-primary">{{ $t('hero.stats.games', '50+ 游戏') }}</div>
                <div class="text-xs text-text-secondary">{{ $t('about.cards.gamesUpdate', '持续更新') }}</div>
              </div>
            </div>
          </div>
          
          <div class="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 transform rotate-[5deg]">
            <div class="flex items-center space-x-2">
              <span class="text-2xl">⭐</span>
              <div>
                <div class="text-sm font-semibold text-text-primary">{{ $t('about.cards.rating', '4.8/5 评分') }}</div>
                <div class="text-xs text-text-secondary">{{ $t('about.cards.recommended', '玩家推荐') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- FAQ Section -->
      <div class="mt-20">
        <h3 class="text-2xl font-bold text-text-primary text-center mb-12">{{ $t('about.faq.title') }}</h3>
        
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
              <h4 class="text-lg font-semibold text-text-primary">{{ $t(faq.questionKey) }}</h4>
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
              {{ $t(faq.answerKey) }}
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
        questionKey: 'about.faq.questions.free.q',
        answerKey: 'about.faq.questions.free.a'
      },
      {
        id: 2,
        questionKey: 'about.faq.questions.download.q',
        answerKey: 'about.faq.questions.download.a'
      },
      {
        id: 3,
        questionKey: 'about.faq.questions.age.q',
        answerKey: 'about.faq.questions.age.a'
      },
      {
        id: 4,
        questionKey: 'about.faq.questions.mobile.q',
        answerKey: 'about.faq.questions.mobile.a'
      },
      {
        id: 5,
        questionKey: 'about.faq.questions.updates.q',
        answerKey: 'about.faq.questions.updates.a'
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