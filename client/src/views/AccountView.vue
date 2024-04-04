<template>
  <div class="column justify-center items-center robotoBold">
    <div class="text-center">
      <q-avatar size="250px">
        <q-img src="/images/user.png" class="round" />
      </q-avatar>
      <div class="q-mt-xs">
        <q-btn
          flat
          round
          v-if="editMode == false"
          color="blue"
          icon="edit"
          @click="editMode = !editMode"
        />
        <q-btn round v-if="editMode == true" color="blue" icon="done" @click="submit()" />
      </div>
      <p v-if="editMode == false" class="text-h4">
        {{ store.person.firstname }} {{ store.person.lastname }}
      </p>
      <div class="row q-gutter-sm q-mt-xs">
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
      <p class="text-h5 robotoMedium">{{ store.person.email }}</p>
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
            <span v-if="store.person.time.hours != null">{{ store.person.time.hours }} h&nbsp;</span
            >
            <span v-if="store.person.time.minutes != null">{{ store.person.time.minutes }} min&nbsp;</span
            >
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
    <div class="q-mt-md">
      <q-btn
        flat
        no-caps
        color="negative"
        class="robotoBold"
        label="Delete Account"
        @click="deleteAccount()"
      />
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
