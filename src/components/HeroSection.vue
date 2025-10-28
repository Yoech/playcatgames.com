<template>
  <section class="bg-gradient-to-br from-purple-50 to-indigo-100 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <!-- Hero Image -->
        <div class="mb-8">
          <img 
            src="https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=408,height=408,fit=cover,f=auto/ca44a85263258ec94b36c2b5bdc55c66/cats.png"
            alt="Cat Games"
            class="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full shadow-lg"
          />
        </div>
        
        <!-- Title and Description -->
        <h1 class="text-4xl md:text-6xl font-bold text-text-primary mb-6">
          {{ $t('hero.title') }}
        </h1>
        
        <p class="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
          {{ $t('hero.description') }}
        </p>
        
        <p class="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10">
          {{ $t('hero.subtitle') }}
        </p>
        
        <!-- CTA Button -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            @click="scrollToGames"
            class="bg-primary hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {{ $t('hero.buttons.start') }}
          </button>
          <button 
            @click="scrollToCategories"
            class="bg-white hover:bg-gray-50 text-primary font-semibold py-3 px-8 rounded-full border-2 border-primary transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {{ $t('hero.buttons.browse') }}
          </button>
        </div>
        
        <!-- Stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl font-bold text-primary mb-2">50+</div>
            <div class="text-text-secondary">{{ $t('hero.stats.games') }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary mb-2">10+</div>
            <div class="text-text-secondary">{{ $t('hero.stats.categories') }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary mb-2">100%</div>
            <div class="text-text-secondary">{{ $t('hero.stats.free') }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary mb-2">24/7</div>
            <div class="text-text-secondary">{{ $t('hero.stats.available') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    scrollToGames() {
      document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })
    },
    scrollToCategories() {
      document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>