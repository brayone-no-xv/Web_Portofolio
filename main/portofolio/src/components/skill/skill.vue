<script setup></script>
<template>
  <section
    id="home"
    class="has-outline mx-auto bg-green-200 sm:mb-8 sm:flex-row sm:justify-center"
  >
    <div class="container text-center">
      <h1 class="title capitalize">💻 Tech Stack</h1>
      <p class="subtitle">My technical expertise and tools I work with</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3">
      <!-- Programming Languages -->
      <table>
        <thead>
          <td class="subtitle font-bold text-blue-500">
            Programming Languages
          </td>
        </thead>
        <tbody>
          <td class="is-badges">Javascript</td>
          <td class="is-badges">Typescript</td>
          <td class="is-badges">PHP</td>
          <td class="is-badges">Python</td>
        </tbody>
      </table>
      <!-- Frameworks & Libraries -->
      <table>
        <thead>
          <td class="subtitle font-bold text-green-500">
            Frameworks & Libraries
          </td>
        </thead>
        <tbody>
          <td class="is-badges">Node.JS</td>
          <td class="is-badges">Laravel</td>
        </tbody>
      </table>
      <!-- Databases -->
      <table>
        <thead>
          <td class="subtitle font-bold text-purple-500">Databases</td>
        </thead>
        <tbody>
          <td class="is-badges">MySQL</td>
          <td class="is-badges">PostgreSQL</td>
          <td class="is-badges">MongoDB</td>
        </tbody>
      </table>
      <!-- DevOps & Tools -->
      <table>
        <thead>
          <td class="subtitle font-bold text-blue-500">DevOps & Tools</td>
        </thead>
        <tbody>
          <td class="is-badges">Github Action</td>
          <td class="is-badges">Typescript</td>
          <td class="is-badges">PHP</td>
          <td class="is-badges">Python</td>
        </tbody>
      </table>
    </div>
  </section>
</template>
<style scoped></style>
