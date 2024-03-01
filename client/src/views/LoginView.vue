<template>
  <div class="column q-gutter-md">
    <div class="text-h3">
      <h4>Login</h4>
    </div>
    <div class="column q-gutter-md">
      <q-input v-model="email" filled type="email" label="Email" />
      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Password">
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
      <q-btn color="white" text-color="primary" label="Log in" />
      <q-btn
        color="white"
        text-color="primary"
        label="Sign in"
        @click="router.push({ name: 'Sign in' })"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('john@gmail.com');
const password = ref('john1190!');
const isPwd = ref(true);
</script>

<style lang="scss" scoped></style>
