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
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import bcrypt from 'bcryptjs';
import useDefaultStore from '@/stores/defaultStore.js';

const store = useDefaultStore();

// const firstname = ref(''),
// const lastname = ref(''),
// const email = ref(''),
// const password = ref(''),
// const birthdate = ref(''),
// const height = ref(null),
// const weight = ref(null),
// const salt = ref(''),

const person = reactive({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  birthdate: '',
  height: null,
  weight: null,
  salt: '',
  time: { hours: 0, minutes: 0, seconds: 0 },
});

const signin = () => {
  person.salt = bcrypt.genSaltSync(10);
  person.password = bcrypt.hashSync(person.password, person.salt);
  console.log('The result: ', person);
  store.addPerson(person);
  router.push({ name: 'Home' });
};

const router = useRouter();
const isPwd = ref(true);
</script>

<style lang="scss" scoped></style>
