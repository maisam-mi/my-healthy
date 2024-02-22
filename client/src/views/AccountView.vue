<template>
  <div class="column justify-center items-center robotoBold">
    <div class="q-mb-md">
      <q-btn color="blue" class="robotoBold" label="bearbeiten" />
    </div>
    <div class="text-center">
      <q-avatar size="250px" class="q-mb-xl">
        <q-img src="/images/user.png" class="round" />
      </q-avatar>
      <p class="text-h4">{{ store.person.firstname }} {{ store.person.lastname }}</p>
      <p class="text-h5 robotoMedium">{{ store.person.email }}</p>
    </div>
    <div class="row q-gutter-md justify-center">
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/birthday-cake.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">{{ store.person.birthdate }}</div>
        </q-card-section>
      </q-card>
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/weight.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">
            <span>{{ store.person.weight }}</span>
            <q-input color="lime-11" bg-color="secondary" filled v-model="store.person.weight">
            </q-input>
            kg
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/height.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">{{ store.person.height }} m</div>
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
          <div class="text-h6">{{ store.person.time }} h</div>
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

const store = useDefaultStore();
store.getPerson();

// optional: image property
const account = {
  time: 40,
};
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
