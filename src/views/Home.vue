<template>
  <div id="home">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="min-h-screen">
      <!-- Hero Section -->
      <HeroSection />
      
      <!-- Games Grid -->
      <GamesSection />
      
      <!-- Categories Section -->
      <CategoriesSection />
      
      <!-- About Section -->
      <AboutSection />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import GamesSection from '../components/GamesSection.vue'
import CategoriesSection from '../components/CategoriesSection.vue'
import AboutSection from '../components/AboutSection.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HeroSection,
    GamesSection,
    CategoriesSection,
    AboutSection,
    Footer
  }
}
</script>

<style scoped>
#home {
  width: 100%;
  overflow-x: hidden;
}
</style>