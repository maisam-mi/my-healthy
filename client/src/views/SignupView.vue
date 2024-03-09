<template>
  <div class="column q-gutter-md">
    <div class="text-h3">
      <h4>Sign in</h4>
    </div>
    <div class="column q-gutter-md q-mx-lg">
      <q-input v-model="person.firstname" filled label="Firstname" />
      <q-input v-model="person.lastname" filled label="Lastname" />
      <q-input v-model="person.email" filled type="email" label="Email" />
      <q-input
        v-model="person.password"
        filled
        :type="isPwd ? 'password' : 'text'"
        label="Password"
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
        <q-input v-model="person.weight" filled label="Weight (kg)" class="col q-pl-sm" />
      </div>
    </div>
    <div class="column q-gutter-md q-mx-lg">
      <q-btn color="white" text-color="primary" label="Sign in" @click="signup()" />

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
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import bcrypt from 'bcryptjs';
import myHealthyStore from '@/stores/defaultStore.js';

const store = myHealthyStore();

const person = reactive({
  firstname: 'Maisam',
  lastname: 'Mohammadi',
  email: 'mohammadi.m19@htlwienwest.at',
  password: 'Maisam16',
  birthdate: '2003-05-26',
  height: 177,
  weight: 71,
  salt: '',
  traveldistance: '',
  calories: '',
  time: { hours: 0, minutes: 0, seconds: 0 },
});

const signup = async () => {
  person.salt = bcrypt.genSaltSync(10);
  person.password = bcrypt.hashSync(person.password, person.salt);
  await store.addPerson(person);
  router.push({ name: 'Home' });
};

const router = useRouter();
const isPwd = ref(true);
</script>

<style lang="scss" scoped></style>
