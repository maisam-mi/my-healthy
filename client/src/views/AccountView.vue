<template>
  <div class="column justify-center items-center robotoBold">
    <div class="q-mb-md q-gutter-sm">
      <q-btn
        no-caps
        v-if="editMode == false"
        color="blue"
        class="robotoBold"
        label="Edit"
        @click="editMode = !editMode"
      />
      <q-btn
        no-caps
        v-if="editMode == true"
        color="blue"
        class="robotoBold"
        label="Submit"
        @click="submit()"
      />
      <q-btn no-caps flat color="standard" class="robotoBold" label="Log out" @click="logout()" />
      <q-btn
        flat
        no-caps
        color="negative"
        class="robotoBold"
        label="Delete Account"
        @click="deleteAccount()"
      />
    </div>
    <div class="text-center">
      <q-avatar size="250px" class="q-mb-xl">
        <q-img src="/images/user.png" class="round" />
      </q-avatar>
      <p v-if="editMode == false" class="text-h4">
        {{ store.person.firstname }} {{ store.person.lastname }}
      </p>
      <div class="row q-gutter-sm">
        <q-input
          v-if="editMode"
          bg-color="secondary"
          filled
          label="firstname"
          v-model="store.person.firstname"
        />
        <q-input
          v-if="editMode"
          bg-color="secondary"
          filled
          label="lastname"
          v-model="store.person.lastname"
        />
      </div>
      <p v-if="editMode == false" class="text-h5 robotoMedium">{{ store.person.email }}</p>
      <q-input
        v-if="editMode"
        bg-color="secondary"
        filled
        label="email"
        v-model="store.person.email"
        class="q-ma-sm"
      />
    </div>
    <div class="row q-gutter-md justify-center">
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/birthday-cake.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">
            <span v-if="editMode == false">
              <span v-if="!store.person.birthdate"> no data available</span>
              <span v-else>{{ store.person.birthdate }}</span>
            </span>

            <q-input
              v-if="editMode"
              bg-color="secondary"
              filled
              v-model="store.person.birthdate"
              type="date"
            />
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/weight.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">
            <span v-if="editMode == false"
              ><span v-if="!store.person.weight"> no data available</span>
              <span v-else>{{ store.person.weight }}</span></span
            >
            <q-input v-if="editMode" bg-color="secondary" filled v-model="store.person.weight" />
            kg
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/height.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">
            <span v-if="editMode == false"
              ><span v-if="!store.person.height"> no data available</span>
              <span v-else>{{ store.person.height }}</span></span
            >
            <q-input v-if="editMode" bg-color="secondary" filled v-model="store.person.height" />
            m
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/distance.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">{{ store.person.traveleddistance }} km</div>
        </q-card-section>
      </q-card>
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/clock.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">
            <span v-if="store.person.time.hours != null">{{ store.person.time.hours }} h</span
            >&nbsp;
            <span v-if="store.person.time.minutes != null">{{ store.person.time.minutes }} min</span
            >&nbsp;
            <span v-if="store.person.time.seconds != null"
              >{{ store.person.time.seconds }} sec</span
            >
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/calories.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">{{ store.person.calories }} kcal</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import myHealthyStore from '@/stores/defaultStore.js';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const store = myHealthyStore();
store.getPerson(store.person.email);
store.getRecords(store.person.pid);

const editMode = ref(false);
const submit = () => {
  editMode.value = !editMode.value;
  store.updatePerson();
};

const logout = () => {
  store.resetVariables();
  router.push({ name: 'Login' });
};

const deleteAccount = () => {
  store.deletePerson();
  store.resetVariables();
  router.push({ name: 'Login' });
};

// optional: image property
</script>
<style lang="scss" scoped>
.robotoBold {
  font-family: 'RobotoBold';
}
.robotoMedium {
  font-family: 'RobotoMedium';
  color: #707070;
}
.card {
  background-color: $dark;
  color: $secondary;
  border-radius: 10px;
  padding: 10px 30px;
}
.image {
  width: 40px;
  height: 40px;
}
</style>
