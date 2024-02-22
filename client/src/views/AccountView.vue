<template>
  <div class="column justify-center items-center robotoBold">
    <div class="q-mb-md">
      <q-btn
        v-if="editMode == false"
        color="blue"
        class="robotoBold"
        label="edit"
        @click="editMode = !editMode"
      />
      <q-btn
        v-if="editMode == true"
        color="blue"
        class="robotoBold"
        label="submit"
        @click="submit()"
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
            <span v-if="editMode == false">{{ store.person.birthdate }}</span>
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
            <span v-if="editMode == false">{{ store.person.weight }}</span>
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
            <span v-if="editMode == false">{{ store.person.height }}</span>
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
            {{ store.person.time.hours }} h {{ store.person.time.minutes }} min
            {{ store.person.time.seconds }} sec
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
import useDefaultStore from '@/stores/defaultStore.js';
import { ref } from 'vue';

const store = useDefaultStore();
store.getPerson();

const editMode = ref(false);
const submit = () => {
  editMode.value = !editMode.value;
  store.updatePerson();
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
