<template>
  <div id="cookie-policy">
    <!-- Header -->
    <Header />
    
    <!-- Page Content -->
    <div class="min-h-screen bg-gray-50 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-text-primary mb-4">{{ $t('legal.cookies.title') }}</h1>
          <p class="text-lg text-text-secondary">{{ $t('legal.cookies.lastUpdated') }}: 2024年11月1日</p>
        </div>

        <!-- Content -->
        <div class="bg-white rounded-lg shadow-lg p-8 prose max-w-none">
          <template v-if="hasFullTranslation">
            <!-- Full translation content -->
            <h2>{{ $t('legal.cookies.sections.what.title') }}</h2>
            <p>{{ $t('legal.cookies.sections.what.content') }}</p>

            <h2>{{ $t('legal.cookies.sections.usage.title') }}</h2>
            <p>{{ $t('legal.cookies.sections.usage.intro') }}</p>
            <ul>
              <li v-for="item in $t('legal.cookies.sections.usage.items')" :key="item">{{ item }}</li>
            </ul>

          <h2>{{ $t('legal.cookies.sections.types.title') }}</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-text-primary mb-2">{{ $t('legal.cookies.sections.types.essential.title') }}</h3>
              <p>{{ $t('legal.cookies.sections.types.essential.content') }}</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-text-primary mb-2">{{ $t('legal.cookies.sections.types.functional.title') }}</h3>
              <p>{{ $t('legal.cookies.sections.types.functional.content') }}</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-text-primary mb-2">{{ $t('legal.cookies.sections.types.analytics.title') }}</h3>
              <p>{{ $t('legal.cookies.sections.types.analytics.content') }}</p>
            </div>
          </div>

          <h2>{{ $t('legal.cookies.sections.control.title') }}</h2>
          <p>{{ $t('legal.cookies.sections.control.content') }}</p>

          <h2>{{ $t('legal.cookies.sections.thirdParty.title') }}</h2>
          <p>{{ $t('legal.cookies.sections.thirdParty.content') }}</p>

          <h2>{{ $t('legal.cookies.sections.updates.title') }}</h2>
          <p>{{ $t('legal.cookies.sections.updates.content') }}</p>

          <h2>{{ $t('legal.cookies.sections.contact.title') }}</h2>
          <p>{{ $t('legal.cookies.sections.contact.content') }}</p>
          <p><strong>{{ $t('legal.cookies.sections.contact.email') }}:</strong> cookies@playcatgames.com</p>
        </template>
        
        <!-- Fallback content -->
        <template v-else>
          <div class="text-center py-8">
            <p class="text-lg text-text-secondary mb-4">
              {{ getCurrentLanguage() === 'zh-CN' ? '完整的Cookie政策正在翻译中...' : 'Full cookie policy translation is in progress...' }}
            </p>
            <p class="text-text-secondary mb-6">
              {{ getCurrentLanguage() === 'zh-CN' ? '请查看' : 'Please refer to the' }} 
              <button @click="changeToLanguage('zh-CN')" class="text-primary hover:underline mx-1">中文版本</button>
              {{ getCurrentLanguage() === 'zh-CN' ? '或' : 'or' }}
              <button @click="changeToLanguage('en')" class="text-primary hover:underline mx-1">English version</button>
              {{ getCurrentLanguage() === 'zh-CN' ? '获取完整信息。' : 'for complete information.' }}
            </p>
            
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <h3 class="text-lg font-semibold mb-3">{{ getCurrentLanguage() === 'zh-CN' ? '基本Cookie信息' : 'Basic Cookie Information' }}</h3>
              <p class="text-text-secondary">
                {{ getCurrentLanguage() === 'zh-CN' 
                  ? '我们使用Cookies来记住您的语言偏好，分析网站使用情况，并改善用户体验。您可以通过浏览器设置控制Cookies的使用。我们不会将Cookies用于侵犯隐私的目的。' 
                  : 'We use cookies to remember your language preferences, analyze website usage, and improve user experience. You can control cookie usage through your browser settings. We do not use cookies for privacy-invasive purposes.' 
                }}
              </p>
              <p class="text-text-secondary mt-2">
                <strong>{{ getCurrentLanguage() === 'zh-CN' ? '联系邮箱：' : 'Contact Email: ' }}</strong>
                cookies@playcatgames.com
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
</template><script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'CookiePolicy',
  components: {
    Header,
    Footer
  },
  setup() {
    const { locale, t } = useI18n()
    
    const hasFullTranslation = computed(() => {
      try {
        const testTranslation = t('legal.cookies.sections.what.content')
        return testTranslation && !testTranslation.startsWith('legal.cookies.sections')
      } catch (error) {
        return false
      }
    })
    
    const getCurrentLanguage = () => locale.value
    const changeToLanguage = (langCode) => {
      locale.value = langCode
      localStorage.setItem('language', langCode)
    }
    
    return { hasFullTranslation, getCurrentLanguage, changeToLanguage }
  }
}
</script>

<style scoped>
#cookie-policy {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#cookie-policy .min-h-screen {
  flex: 1;
}

.prose h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h2:first-child {
  margin-top: 0;
}

.prose h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.prose p {
  color: #64748b;
  line-height: 1.75;
  margin-bottom: 1rem;
}

.prose ul {
  list-style-type: disc;
  list-style-position: inside;
  color: #64748b;
  margin-bottom: 1rem;
}

.prose li {
  line-height: 1.75;
  margin-bottom: 0.5rem;
}
</style>