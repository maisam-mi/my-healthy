<template>
  <div class="column q-gutter-md">
    <div class="text-h3">
      <h4>Sign in</h4>
    </div>
    <q-form class="q-gutter-md" @submit="signup()">
      <div class="column q-gutter-md q-mx-lg">
        <q-input
          v-model="person.firstname"
          filled
          label="Firstname *"
          :rules="[(val) => !!val || 'Firstname is required']"
        />
        <q-input
          v-model="person.lastname"
          filled
          label="Lastname *"
          :rules="[(val) => !!val || 'Lastname is required']"
        />
        <q-input
          v-model="person.email"
          filled
          type="email"
          label="Email *"
          :rules="[
            (val) => !!val || 'Email is required',
            (val) => val.includes('@') || 'This is not en email. Maybe you forgot: @',
          ]"
        />
        <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Password *"
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
        <q-input v-model="person.birthdate" filled type="date" label="Birthdate" />
        <div class="row">
          <q-input v-model="person.height" filled label="Height (cm)" class="col q-pr-sm" />
          <q-input
            v-model="person.weight"
            filled
            label="Weight (kg) *"
            class="col q-pl-sm"
            :rules="[(val) => !!val || 'Weight is required']"
          />
        </div>
      </div>
      <div class="column q-gutter-md q-mx-lg">
        <p v-if="message != ''">{{ message }}</p>
        <q-btn color="white" text-color="primary" label="Sign up" type="submit" />

        <q-btn
          color="white"
          text-color="primary"
          label="Log in"
          @click="router.push({ name: 'Login' })"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import bcrypt from 'bcryptjs';
import myHealthyStore from '@/stores/defaultStore.js';

const store = myHealthyStore();

// The password input should be out of the object, cause while not being successful, it is hashed.
const password = ref('Maisam16');

const person = reactive({
  firstname: 'Maisam',
  lastname: 'Mohammadi',
  email: 'mohammadi.m19@htlwienwest.at',
  password: '',
  birthdate: '2003-05-26',
  height: 177,
  weight: 71,
  salt: '',
  traveldistance: '',
  calories: '',
  time: { hours: 0, minutes: 0, seconds: 0 },
});

const message = ref('');

const signup = async () => {
  try {
    await store.addPerson(person, password.value);
  } catch (error) {
    message.value = error;
  }
  router.push({ name: 'Home' });
};

const router = useRouter();
const isPwd = ref(true);
</script>

<style lang="scss" scoped></style>
