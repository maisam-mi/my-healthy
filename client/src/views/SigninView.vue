<template>
  <div class="column q-gutter-md">
    <div class="text-h3">
      <h4>Sign in</h4>
    </div>
    <div class="column q-gutter-md q-mx-lg">
      <q-input v-model="data.firstname" filled label="Firstname" />
      <q-input v-model="data.lastname" filled label="Lastname" />
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
      <q-input v-model="data.birthdate" filled type="date" label="Birthdate" />
      <div class="row">
        <q-input v-model="data.height" filled label="Height (cm)" class="col q-pr-sm" />
        <q-input v-model="data.weight" filled label="Weight (kg)" class="col q-pl-sm" />
      </div>
    </div>
    <div class="column q-gutter-md q-mx-lg">
      <q-btn color="white" text-color="primary" label="Sign in" @click="signin()" />

      <q-btn
        color="white"
        text-color="primary"
        label="Log in"
        @click="router.push({ name: 'Login' })"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import bcrypt from 'bcryptjs';

const data = ref({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  birthdate: '',
  height: null,
  weight: null,
  salt: '',
});

const signin = () => {
  data.salt.value = bcrypt.genSaltSync(10);
  data.password.value = bcrypt.hashSync(data.password.value, data.salt.value);
  // Here continues
};

const router = useRouter();
const isPwd = ref(true);
</script>

<style lang="scss" scoped></style>
