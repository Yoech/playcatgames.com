<template>
  <div id="privacy-policy">
    <!-- Header -->
    <Header />
    
    <!-- Page Content -->
    <div class="min-h-screen bg-gray-50 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-text-primary mb-4">{{ $t('legal.privacy.title') }}</h1>
          <p class="text-lg text-text-secondary">{{ $t('legal.privacy.lastUpdated') }}: 2024年11月1日</p>
        </div>

        <!-- Content -->
        <div class="bg-white rounded-lg shadow-lg p-8 prose max-w-none">
          <template v-if="hasFullTranslation">
            <h2>{{ $t('legal.privacy.sections.overview.title') }}</h2>
            <p>{{ $t('legal.privacy.sections.overview.content') }}</p>

            <h2>{{ $t('legal.privacy.sections.dataCollection.title') }}</h2>
            <p>{{ $t('legal.privacy.sections.dataCollection.intro') }}</p>
            <ul>
              <li v-for="item in $t('legal.privacy.sections.dataCollection.items')" :key="item">{{ item }}</li>
            </ul>

            <h2>{{ $t('legal.privacy.sections.dataUsage.title') }}</h2>
            <p>{{ $t('legal.privacy.sections.dataUsage.intro') }}</p>
            <ul>
              <li v-for="item in $t('legal.privacy.sections.dataUsage.items')" :key="item">{{ item }}</li>
            </ul>

            <h2>{{ $t('legal.privacy.sections.cookies.title') }}</h2>
            <p>{{ $t('legal.privacy.sections.cookies.content') }}</p>

            <h2>{{ $t('legal.privacy.sections.thirdParty.title') }}</h2>
            <p>{{ $t('legal.privacy.sections.thirdParty.content') }}</p>

            <h2>{{ $t('legal.privacy.sections.security.title') }}</h2>
            <p>{{ $t('legal.privacy.sections.security.content') }}</p>

            <h2>{{ $t('legal.privacy.sections.children.title') }}</h2>
            <p>{{ $t('legal.privacy.sections.children.content') }}</p>

            <h2>{{ $t('legal.privacy.sections.changes.title') }}</h2>
            <p>{{ $t('legal.privacy.sections.changes.content') }}</p>

            <h2>{{ $t('legal.privacy.sections.contact.title') }}</h2>
            <p>{{ $t('legal.privacy.sections.contact.content') }}</p>
            <p><strong>{{ $t('legal.privacy.sections.contact.email') }}:</strong> privacy@playcatgames.com</p>
          </template>
          
          <!-- Fallback content for incomplete translations -->
          <template v-else>
            <div class="text-center py-8">
              <p class="text-lg text-text-secondary mb-4">
                {{ getCurrentLanguage() === 'zh-CN' ? '完整的隐私政策正在翻译中...' : 'Full privacy policy translation is in progress...' }}
              </p>
              <p class="text-text-secondary mb-6">
                {{ getCurrentLanguage() === 'zh-CN' ? '请查看' : 'Please refer to the' }} 
                <button @click="changeToLanguage('zh-CN')" class="text-primary hover:underline mx-1">中文版本</button>
                {{ getCurrentLanguage() === 'zh-CN' ? '或' : 'or' }}
                <button @click="changeToLanguage('en')" class="text-primary hover:underline mx-1">English version</button>
                {{ getCurrentLanguage() === 'zh-CN' ? '获取完整信息。' : 'for complete information.' }}
              </p>
              
              <!-- Basic information in current language -->
              <div class="bg-gray-50 rounded-lg p-6 text-left">
                <h3 class="text-lg font-semibold mb-3">{{ getCurrentLanguage() === 'zh-CN' ? '基本信息' : 'Basic Information' }}</h3>
                <p class="text-text-secondary">
                  {{ getCurrentLanguage() === 'zh-CN' 
                    ? 'PlayCatGames 致力于保护您的隐私。我们收集最少必要的信息来提供服务，包括语言偏好和匿名使用统计。我们不会出售或分享您的个人信息。' 
                    : 'PlayCatGames is committed to protecting your privacy. We collect minimal necessary information to provide services, including language preferences and anonymous usage statistics. We do not sell or share your personal information.' 
                  }}
                </p>
                <p class="text-text-secondary mt-2">
                  <strong>{{ getCurrentLanguage() === 'zh-CN' ? '联系邮箱：' : 'Contact Email: ' }}</strong>
                  privacy@playcatgames.com
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
  name: 'PrivacyPolicy',
  components: {
    Header,
    Footer
  },
  setup() {
    const { locale, t } = useI18n()
    
    const hasFullTranslation = computed(() => {
      try {
        // Check if full translation exists by testing a nested key
        const testTranslation = t('legal.privacy.sections.overview.content')
        return testTranslation && !testTranslation.startsWith('legal.privacy.sections')
      } catch (error) {
        return false
      }
    })
    
    const getCurrentLanguage = () => {
      return locale.value
    }
    
    const changeToLanguage = (langCode) => {
      locale.value = langCode
      localStorage.setItem('language', langCode)
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
#privacy-policy {
  width: 100%;
  overflow-x: hidden;
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