<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="container py-8">
      <div class="space-x-3 pb-2 border-b border-purple-200">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink
            RouterLink
            to="/about"
          >
            About
          </RouterLink>
        </nav>
        <h1 class="text-2xl mt-2"></h1>
      </div>
    </div>
  </header>

  <RouterView />
</template>
