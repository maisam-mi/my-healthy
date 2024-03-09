<template>
  <div class="column q-gutter-md">
    <div class="text-h3">
      <h4>Login</h4>
    </div>
    <div class="column q-gutter-md">
      <q-input v-model="data.email" filled type="email" label="Email" />
      <q-input v-model="data.password" filled :type="isPwd ? 'password' : 'text'" label="Password">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>
    <div class="column q-gutter-md">
      <q-btn color="white" text-color="primary" label="Log in" @click="login()" />
      <q-btn
        color="white"
        text-color="primary"
        label="Sign in"
        @click="router.push({ name: 'Sign in' })"
      />
    </div>
    <div v-show="store.errorMessage">
      {{ store.errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import myHealthyStore from '@/stores/defaultStore.js';

const store = myHealthyStore();

const router = useRouter();

// const email = ref('mohammadi.m19@htlwienwest.at');
// const password = ref('Maisam16');

const data = ref({
  email: 'mohammadi.m19@htlwienwest.at',
  password: 'Maisam16',
})

const isPwd = ref(true);

const login = async () => {
  await store.authenticatePerson(data.value);
  router.push({ name: 'Home' })
}
</script>

<style lang="scss" scoped></style>
