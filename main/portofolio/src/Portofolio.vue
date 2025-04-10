<template>
  <header>
    <!-- navbar -->
    <navbar />
  </header>
  <main>
    <!-- hero -->
    <heroSection />
    <!-- about -->
    <aboutSection />
    <!-- skill -->
    <skillSection />
  </main>
  <footer>
    <!-- footer -->
    <footerSection />
  </footer>
</template>
<script setup>
import navbar from "./components/navbar/navbar.vue";
import heroSection from "./components/hero/hero.vue";
import aboutSection from "./components/about/about.vue";
import skillSection from "./components/skill/skill.vue";
import footerSection from "./components/footer/footer.vue";
</script>
<style scoped></style>
