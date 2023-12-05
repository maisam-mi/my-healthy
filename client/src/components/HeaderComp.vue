<template>
  <q-header class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="r_menu"
        @click="$emit('toggleLeftDrawer')"
      />

      <q-toolbar-title>
        <q-avatar>
          <img src="/images/logo/logo.svg" />
        </q-avatar>
        <span class="q-ml-sm"> my healthy </span>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
defineEmits(["toggleLeftDrawer"]);
</script>

<style scoped>
.rotate-on-hover {
  transform: rotate(0);
  transition: transform 0.8s ease-in-out;
}
.rotate-on-hover:hover {
  transform: rotate(-360deg);
  transition: transform 0.8s ease-in-out;
}
</style>
