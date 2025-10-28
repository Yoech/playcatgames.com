<template>
  <div id="terms-of-service">
    <!-- Header -->
    <Header />
    
    <!-- Page Content -->
    <div class="min-h-screen bg-gray-50 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-text-primary mb-4">{{ $t('legal.terms.title') }}</h1>
          <p class="text-lg text-text-secondary">{{ $t('legal.terms.lastUpdated') }}: 2024年11月1日</p>
        </div>

        <!-- Content -->
        <div class="bg-white rounded-lg shadow-lg p-8 prose max-w-none">
          <template v-if="hasFullTranslation">
            <h2>{{ $t('legal.terms.sections.acceptance.title') }}</h2>
            <p>{{ $t('legal.terms.sections.acceptance.content') }}</p>

            <h2>{{ $t('legal.terms.sections.services.title') }}</h2>
            <p>{{ $t('legal.terms.sections.services.content') }}</p>

            <h2>{{ $t('legal.terms.sections.userConduct.title') }}</h2>
            <p>{{ $t('legal.terms.sections.userConduct.intro') }}</p>
            <ul>
              <li v-for="item in $t('legal.terms.sections.userConduct.items')" :key="item">{{ item }}</li>
            </ul>

            <h2>{{ $t('legal.terms.sections.intellectualProperty.title') }}</h2>
            <p>{{ $t('legal.terms.sections.intellectualProperty.content') }}</p>

            <h2>{{ $t('legal.terms.sections.disclaimer.title') }}</h2>
            <p>{{ $t('legal.terms.sections.disclaimer.content') }}</p>

            <h2>{{ $t('legal.terms.sections.liability.title') }}</h2>
            <p>{{ $t('legal.terms.sections.liability.content') }}</p>

            <h2>{{ $t('legal.terms.sections.modifications.title') }}</h2>
            <p>{{ $t('legal.terms.sections.modifications.content') }}</p>

            <h2>{{ $t('legal.terms.sections.termination.title') }}</h2>
            <p>{{ $t('legal.terms.sections.termination.content') }}</p>

            <h2>{{ $t('legal.terms.sections.governing.title') }}</h2>
            <p>{{ $t('legal.terms.sections.governing.content') }}</p>

            <h2>{{ $t('legal.terms.sections.contact.title') }}</h2>
            <p>{{ $t('legal.terms.sections.contact.content') }}</p>
            <p><strong>{{ $t('legal.terms.sections.contact.email') }}:</strong> legal@playcatgames.com</p>
          </template>
          
          <!-- Fallback content -->
          <template v-else>
            <div class="text-center py-8">
              <p class="text-lg text-text-secondary mb-4">
                {{ getCurrentLanguage() === 'zh-CN' ? '完整的使用条款正在翻译中...' : 'Full terms of service translation is in progress...' }}
              </p>
              <p class="text-text-secondary mb-6">
                {{ getCurrentLanguage() === 'zh-CN' ? '请查看' : 'Please refer to the' }} 
                <button @click="changeToLanguage('zh-CN')" class="text-primary hover:underline mx-1">中文版本</button>
                {{ getCurrentLanguage() === 'zh-CN' ? '或' : 'or' }}
                <button @click="changeToLanguage('en')" class="text-primary hover:underline mx-1">English version</button>
                {{ getCurrentLanguage() === 'zh-CN' ? '获取完整信息。' : 'for complete information.' }}
              </p>
              
              <div class="bg-gray-50 rounded-lg p-6 text-left">
                <h3 class="text-lg font-semibold mb-3">{{ getCurrentLanguage() === 'zh-CN' ? '基本条款' : 'Basic Terms' }}</h3>
                <p class="text-text-secondary">
                  {{ getCurrentLanguage() === 'zh-CN' 
                    ? '通过使用PlayCatGames，您同意我们的使用条款。我们提供免费的在线游戏服务，所有内容受版权保护。请合法合理地使用我们的服务。' 
                    : 'By using PlayCatGames, you agree to our terms of service. We provide free online gaming services and all content is protected by copyright. Please use our services legally and reasonably.' 
                  }}
                </p>
                <p class="text-text-secondary mt-2">
                  <strong>{{ getCurrentLanguage() === 'zh-CN' ? '联系邮箱：' : 'Contact Email: ' }}</strong>
                  legal@playcatgames.com
                </p>
              </div>
            </div>
          </template>
        </div>

        <!-- Back Button -->
        <div class="text-center mt-8">
          <router-link 
            to="/" 
            class="inline-flex items-center px-6 py-3 bg-primary hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            {{ $t('common.backToHome') }}
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'TermsOfService',
  components: {
    Header,
    Footer
  },
  setup() {
    const { t, locale } = useI18n()

    const hasFullTranslation = computed(() => {
      const currentLocale = locale.value
      return currentLocale === 'zh-CN' || currentLocale === 'en'
    })

    const getCurrentLanguage = () => {
      return locale.value
    }

    const changeToLanguage = (lang) => {
      locale.value = lang
    }

    return {
      hasFullTranslation,
      getCurrentLanguage,
      changeToLanguage
    }
  }
}
</script>

<style scoped>
#terms-of-service {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#terms-of-service .min-h-screen {
  flex: 1;
}

.prose h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #374151;
}

.prose ul {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
  color: #374151;
}
</style>