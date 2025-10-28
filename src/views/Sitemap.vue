<template>
  <div id="sitemap">
    <!-- Header -->
    <Header />
    
    <!-- Page Content -->
    <div class="min-h-screen bg-gray-50 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-text-primary mb-4">{{ $t('legal.sitemap.title') }}</h1>
          <p class="text-lg text-text-secondary">{{ $t('legal.sitemap.description') }}</p>
        </div>

        <!-- Content -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <template v-if="hasFullTranslation">
            <!-- Main Pages -->
            <div class="mb-8">
              <h2 class="text-2xl font-semibold text-text-primary mb-4">{{ $t('legal.sitemap.sections.main.title') }}</h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div v-for="page in $t('legal.sitemap.sections.main.pages')" :key="page.title" 
                     class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 class="font-medium text-text-primary mb-2">{{ page.title }}</h3>
                  <p class="text-text-secondary text-sm mb-2">{{ page.description }}</p>
                  <a :href="page.url" class="text-primary hover:underline text-sm">{{ page.url }}</a>
                </div>
              </div>
            </div>

            <!-- Game Categories -->
            <div class="mb-8">
              <h2 class="text-2xl font-semibold text-text-primary mb-4">{{ $t('legal.sitemap.sections.categories.title') }}</h2>
              <div class="grid md:grid-cols-3 gap-4">
                <div v-for="category in $t('legal.sitemap.sections.categories.items')" :key="category" 
                     class="p-3 bg-primary bg-opacity-10 rounded-lg text-center">
                  <span class="text-primary font-medium">{{ category }}</span>
                </div>
              </div>
            </div>

            <!-- Legal Pages -->
            <div class="mb-8">
              <h2 class="text-2xl font-semibold text-text-primary mb-4">{{ $t('legal.sitemap.sections.legal.title') }}</h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div v-for="page in $t('legal.sitemap.sections.legal.pages')" :key="page.title" 
                     class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 class="font-medium text-text-primary mb-2">{{ page.title }}</h3>
                  <p class="text-text-secondary text-sm mb-2">{{ page.description }}</p>
                  <router-link :to="page.url" class="text-primary hover:underline text-sm">{{ page.url }}</router-link>
                </div>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="border-t pt-6">
              <h2 class="text-2xl font-semibold text-text-primary mb-4">{{ $t('legal.sitemap.sections.contact.title') }}</h2>
              <div class="bg-gray-50 rounded-lg p-6">
                <p class="text-text-secondary mb-2">{{ $t('legal.sitemap.sections.contact.description') }}</p>
                <p class="text-text-primary"><strong>{{ $t('legal.sitemap.sections.contact.email') }}:</strong> contact@playcatgames.com</p>
              </div>
            </div>
          </template>
          
          <!-- Fallback content -->
          <template v-else>
            <div class="text-center py-8">
              <p class="text-lg text-text-secondary mb-4">
                {{ getCurrentLanguage() === 'zh-CN' ? '完整的网站地图正在翻译中...' : 'Full sitemap translation is in progress...' }}
              </p>
              <p class="text-text-secondary mb-6">
                {{ getCurrentLanguage() === 'zh-CN' ? '请查看' : 'Please refer to the' }} 
                <button @click="changeToLanguage('zh-CN')" class="text-primary hover:underline mx-1">中文版本</button>
                {{ getCurrentLanguage() === 'zh-CN' ? '或' : 'or' }}
                <button @click="changeToLanguage('en')" class="text-primary hover:underline mx-1">English version</button>
                {{ getCurrentLanguage() === 'zh-CN' ? '获取完整信息。' : 'for complete information.' }}
              </p>
              
              <div class="bg-gray-50 rounded-lg p-6 text-left">
                <h3 class="text-lg font-semibold mb-3">{{ getCurrentLanguage() === 'zh-CN' ? '基本导航' : 'Basic Navigation' }}</h3>
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 class="font-medium mb-2">{{ getCurrentLanguage() === 'zh-CN' ? '主要页面' : 'Main Pages' }}</h4>
                    <ul class="text-text-secondary space-y-1">
                      <li><router-link to="/" class="text-primary hover:underline">{{ getCurrentLanguage() === 'zh-CN' ? '首页' : 'Home' }}</router-link></li>
                      <li><a href="#games" class="text-primary hover:underline">{{ getCurrentLanguage() === 'zh-CN' ? '游戏' : 'Games' }}</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-medium mb-2">{{ getCurrentLanguage() === 'zh-CN' ? '法律页面' : 'Legal Pages' }}</h4>
                    <ul class="text-text-secondary space-y-1">
                      <li><router-link to="/privacy" class="text-primary hover:underline">{{ getCurrentLanguage() === 'zh-CN' ? '隐私政策' : 'Privacy Policy' }}</router-link></li>
                      <li><router-link to="/terms" class="text-primary hover:underline">{{ getCurrentLanguage() === 'zh-CN' ? '使用条款' : 'Terms of Service' }}</router-link></li>
                      <li><router-link to="/cookies" class="text-primary hover:underline">{{ getCurrentLanguage() === 'zh-CN' ? 'Cookie政策' : 'Cookie Policy' }}</router-link></li>
                    </ul>
                  </div>
                </div>
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
  name: 'Sitemap',
  components: {
    Header,
    Footer
  },
  setup() {
    const { locale, t } = useI18n()
    
    const hasFullTranslation = computed(() => {
      try {
        const testTranslation = t('legal.sitemap.sections.main.title')
        return testTranslation && !testTranslation.startsWith('legal.sitemap.sections')
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
#sitemap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#sitemap .min-h-screen {
  flex: 1;
}

ul li {
  line-height: 1.75;
}
</style>