<template>
  <div class="column" style="height: 91vh">
    <div class="col-4 text-h3 robotoBold">
      <h4>Login</h4>
    </div>
    <q-form class="col-8 column" @submit="login()">
      <div class="col-6 column">
        <q-input
          class="q-px-lg"
          v-model="data.email"
          filled
          type="email"
          label="Email"
          :rules="[(val) => !!val || 'Email is required']"
        />
        <q-input
          class="q-px-lg"
          v-model="data.password"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Password"
          :rules="[(val) => !!val || 'Password is required']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>
      <div class="col-6 column">
        <q-btn
          no-caps
          color="white"
          class="q-py-md q-mx-sm robotoBold my-rounded"
          text-color="primary"
          type="submit"
          label="Log in"
        />
        <q-btn
          no-caps
          flat
          color="white"
          class="q-py-md q-mx-sm q-mt-md"
          text-color="primary"
          @click="router.push({ name: 'Sign up' })"
        >
          <span>No Account yet? <span class="robotoBold">Sign up</span></span>
        </q-btn>
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import myHealthyStore from '@/stores/defaultStore.js';

const store = myHealthyStore();

const router = useRouter();

// test data
const data = ref({
  email: 'mohammadi.m19@htlwienwest.at',
  password: 'Maisam16',
});

const isPwd = ref(true);

const login = async () => {
  await store.authenticatePerson(data.value);
  router.push({ name: 'Home' });
};
</script>

<style lang="scss" scoped>
.my-rounded {
  border-radius: 8px;
}
</style>
