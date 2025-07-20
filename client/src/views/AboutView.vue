<template>
  <div class="text-h3">
    <h4>Impressum</h4>
    <p class="text-h6 text-weight-light">{{ store.aboutContent }}</p>
  </div>
</template>
<script setup>
import myHealthyStore from '@/stores/defaultStore.js';

const store = myHealthyStore();
</script>
