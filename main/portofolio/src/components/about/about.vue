<script setup></script>
<template>
  <section
    id="home"
    class="has-outline mx-auto flex flex-col bg-green-200 sm:mb-8 sm:flex-row sm:justify-center"
    :class="{
      'bg-gray-100': !isDark,
      'bg-gray-900 ': isDark,
    }"
  >
    <div class="container text-center">
      <h1 class="title capitalize">About Me</h1>
      <p
        class="subtitle"
        :class="{
          'text-black': !isDark,
          'text-white ': isDark,
        }"
      >
        I am a passionate fullstack developer with expertise in building robust,
        scalable, and efficient server-side applications. With a strong
        foundation in various backend technologies and frameworks, I specialize
        in creating reliable APIs, optimizing database performance, and
        implementing secure authentication systems.
      </p>
    </div>
  </section>
</template>
<style scoped></style>
