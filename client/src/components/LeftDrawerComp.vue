<template>
  <q-drawer
    show-if-above
    side="left"
    class="bg-dark text-secondary robotoBold"
    bordered
    :width="250"
    :breakpoint="500"
  >
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item clickable v-ripple to="/">
          <q-item-section> Startpage </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/account">
          <q-item-section> Konto </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/about">
          <q-item-section> Impressum </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/login" v-if="!store.isAuthenticated">
          <q-item-section> Login </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="logout" v-if="store.isAuthenticated">
          <q-item-section> Log out </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
<script setup>
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import myHealthyStore from '@/stores/defaultStore.js';

const router = useRouter();

const $q = useQuasar();
const store = myHealthyStore();

const logout = () => {
  store.resetVariables();
  router.push({ name: 'Login' });
};
</script>
<style lang="scss">
.menu-list .q-item {
  color: $secondary;
}

.robotoBold {
  font-family: 'RobotoBold';
}
</style>
