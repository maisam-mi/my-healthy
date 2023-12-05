<template>
  <q-layout view="hHh lpR fFf">
    <HeaderComp @toggleLeftDrawer="toggleLeftDrawer"></HeaderComp>

    <LeftDrawerComp v-model="leftDrawerOpen"></LeftDrawerComp>

    <q-page-container>
      <q-page class="q-pa-md row justify-center">
        <RouterView />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import LeftDrawerComp from '@/components/LeftDrawerComp.vue';
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
</script>
