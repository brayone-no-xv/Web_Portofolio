<script setup></script>
<template>
  <nav
    class="navbar shadow-md shadow-gray-500"
    :class="{ 'bg-gray-200': !isDark, 'bg-gray-800': isDark }"
  >
    <!-- Mobile menu -->
    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button
        type="button"
        @click="toggleMenu"
        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-blue-950 hover:text-blue-950 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span class="absolute -inset-0.5"></span>
        <span class="sr-only">Open main menu</span>

        <svg
          v-if="!isMobileMenuOpen"
          class="block size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          v-else
          class="hidden size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <!-- Desktop menu -->
    <menu class="navbar-menu">
      <div class="hidden sm:block">
        <div class="navbar-buttons">
          <a
            href="#home"
            class="navbar-item text-gray-700"
            :class="{
              'text-blue-500 hover:text-blue-950': !isDark,
              'text-white hover:text-amber-500': isDark,
            }"
            aria-current="page"
            >Beranda</a
          >
          <a
            href="#service"
            class="navbar-item text-gray-700"
            :class="{
              'text-blue-500 hover:text-blue-950': !isDark,
              'text-white hover:text-amber-500': isDark,
            }"
            >Layanan</a
          >
          <a
            href="#about"
            class="navbar-item text-gray-700"
            :class="{
              'text-blue-500 hover:text-blue-950': !isDark,
              'text-white hover:text-amber-500': isDark,
            }"
            >Tentang</a
          >
          <a
            href="#design"
            class="navbar-item text-gray-700"
            :class="{
              'text-blue-500 hover:text-blue-950': !isDark,
              'text-white hover:text-amber-500': isDark,
            }"
            >Desain</a
          >
          <a
            href="#portofolio"
            class="navbar-item text-gray-700"
            :class="{
              'text-blue-500 hover:text-blue-950': !isDark,
              'text-white hover:text-amber-500': isDark,
            }"
            >Portofolio</a
          >
          <a
            href="#contact"
            class="rounded-full bg-blue-500 px-9 py-2 text-sm font-medium text-gray-300 duration-200 hover:bg-gray-700 hover:text-white"
            >Kirim Pesan</a
          >
        </div>
      </div>
    </menu>

    <!-- Mobile Menu -->
    <div class="sm:hidden" id="mobile-menu" v-if="isMobileMenuOpen">
      <div class="space-y-1 bg-gray-900 px-2 pt-2 pb-3">
        <a
          href="#home"
          class="block rounded-md px-3 py-2 text-base font-medium text-white"
          :class="{
            'text-blue-500 hover:text-blue-950': !isDark,
            'text-white hover:text-amber-500': isDark,
          }"
          aria-current="page"
          >Beranda</a
        >
        <a
          href="#service"
          class="block rounded-md px-3 py-2 text-base font-medium text-white"
          :class="{
            'text-blue-500 hover:text-blue-950': !isDark,
            'text-white hover:text-amber-500': isDark,
          }"
          >Layanan</a
        >
        <a
          href="#about"
          class="navbar-item text-gray-700"
          :class="{
            'text-blue-500 hover:text-blue-950': !isDark,
            'text-white hover:text-amber-500': isDark,
          }"
          >Tentang</a
        >
        <a
          href="#design"
          class="navbar-item text-gray-700"
          :class="{
            'text-blue-500 hover:text-blue-950': !isDark,
            'text-white hover:text-amber-500': isDark,
          }"
          >Desain</a
        >
        <a
          href="#portofolio"
          class="navbar-item text-gray-700"
          :class="{
            'text-blue-500 hover:text-blue-950': !isDark,
            'text-white hover:text-amber-500': isDark,
          }"
          >Portofolio</a
        >
        <a
          href="contact"
          class="rounded-full bg-blue-500 px-9 py-2 text-sm font-medium text-gray-300 duration-200 hover:bg-gray-700 hover:text-white"
          >Kirim Pesan</a
        >
      </div>
    </div>
    <!-- Darkmode Button -->
    <div
      class="absolute inset-y-0 right-0 flex pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-1"
    >
      <div class="flex items-center">
        <label
          for="hs-medium-switch-with-icons"
          class="relative inline-block h-7 w-13 cursor-pointer"
        >
          <input
            type="checkbox"
            id="hs-medium-switch-with-icons"
            class="peer sr-only"
            v-model="isDark"
          />
          <span
            class="absolute inset-0 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-800 peer-disabled:pointer-events-none peer-disabled:opacity-50"
          ></span>
          <span
            class="absolute start-0.5 top-1/2 size-6 -translate-y-1/2 rounded-full bg-white shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full"
          ></span>
          <!-- Left Icon (Off) -->
          <div
            class="absolute start-1 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center text-gray-900 transition-colors duration-200 peer-checked:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-4 shrink-0"
            >
              <path
                d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"
              />
            </svg>
          </div>
          <!-- Right Icon (On) -->
          <div
            class="absolute end-1 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center text-gray-500 transition-colors duration-200 peer-checked:text-black"
          >
            <!-- <svg class="size-3 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> -->

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-3 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </label>
      </div>
    </div>
  </nav>
</template>
<style scoped></style>
