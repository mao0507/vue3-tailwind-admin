<script setup>
/* eslint-disable */
import themeChange from '../components/themeChange.vue';
</script>

<template>
  <div class="button-container flex justify-center my-10">
    <button class="btn">Button</button>
    <button class="btn btn-primary">Button</button>
    <button class="btn btn-secondary">Button</button>
    <button class="btn btn-accent">Button</button>
    <button class="btn btn-ghost">Button</button>
    <button class="btn btn-link">Button</button>
  </div>

  <themeChange />

  <div class="flex justify-center">
    <div class="alert alert-success shadow-lg w-96">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Your purchase has been confirmed!</span>
      </div>
    </div>
  </div>
</template>
