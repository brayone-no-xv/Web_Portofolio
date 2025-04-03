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
            href="/home"
            class="navbar-item text-gray-700"
            :class="{
              'text-blue-500 hover:text-blue-950': !isDark,
              'text-white hover:text-amber-500': isDark,
            }"
            aria-current="page"
            >M.Rahman</a
          >
          <a
            href="/about"
            class="navbar-item text-gray-700"
            :class="{
              'text-blue-500 hover:text-blue-950': !isDark,
              'text-white hover:text-amber-500': isDark,
            }"
            aria-current="page"
            >About</a
          >
          <a
            href="/skill"
            class="navbar-item text-gray-700"
            :class="{
              'text-blue-500 hover:text-blue-950': !isDark,
              'text-white hover:text-amber-500': isDark,
            }"
            >Skills</a
          >
          <a
            href="/project"
            class="navbar-item text-gray-700"
            :class="{
              'text-blue-500 hover:text-blue-950': !isDark,
              'text-white hover:text-amber-500': isDark,
            }"
            >Projects</a
          >
          <a
            href="/contact"
            class="navbar-item text-gray-700"
            :class="{
              'text-blue-500 hover:text-blue-950': !isDark,
              'text-white hover:text-amber-500': isDark,
            }"
            >Contact</a
          >
          <a
            href="https://github.com/brayone-no-xv"
            class="navbar-item text-gray-700"
            :class="{
              'text-blue-500 hover:text-blue-950': !isDark,
              'text-white hover:text-amber-500': isDark,
            }"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              class="absolute inline-flex h-10 w-10 outline-2 outline-red-600"
            >
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              /></svg
          ></a>
        </div>
      </div>
    </menu>

    <!-- Mobile Menu -->
    <div class="sm:hidden" id="mobile-menu" v-if="isMobileMenuOpen">
      <div class="space-y-1 bg-gray-900 px-2 pt-2 pb-3">
        <a
          href="/home"
          class="block rounded-md px-3 py-2 text-base font-medium text-white"
          :class="{
            'text-blue-500 hover:text-blue-950': !isDark,
            'text-white hover:text-amber-500': isDark,
          }"
          aria-current="page"
          >Beranda</a
        >
        <a
          href="/service"
          class="block rounded-md px-3 py-2 text-base font-medium text-white"
          :class="{
            'text-blue-500 hover:text-blue-950': !isDark,
            'text-white hover:text-amber-500': isDark,
          }"
          >Layanan</a
        >
        <a
          href="/about"
          class="navbar-item text-gray-700"
          :class="{
            'text-blue-500 hover:text-blue-950': !isDark,
            'text-white hover:text-amber-500': isDark,
          }"
          >Tentang</a
        >
        <a
          href="/design"
          class="navbar-item text-gray-700"
          :class="{
            'text-blue-500 hover:text-blue-950': !isDark,
            'text-white hover:text-amber-500': isDark,
          }"
          >Desain</a
        >
        <a
          href="/portofolio"
          class="navbar-item text-gray-700"
          :class="{
            'text-blue-500 hover:text-blue-950': !isDark,
            'text-white hover:text-amber-500': isDark,
          }"
          >Portofolio</a
        >
        <a
          href="/contact"
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
