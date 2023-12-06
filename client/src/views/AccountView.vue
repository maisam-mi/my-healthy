<template>
  <div class="column justify-center items-center robotoBold">
    <div class="q-mb-md">
      <q-btn color="blue" class="robotoBold" label="bearbeiten" />
    </div>
    <div class="text-center">
      <q-avatar size="250px" class="q-mb-xl">
        <q-img src="/images/pexels-pixabay-220453.jpg" class="round" />
      </q-avatar>
      <p class="text-h4">{{ account.name }}</p>
      <p class="text-h5 robotoMedium">{{ account.email }}</p>
    </div>
    <div class="row q-gutter-md justify-center">
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/birthday-cake.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">{{ account.age }}</div>
        </q-card-section>
      </q-card>
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/birthday-cake.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">{{ account.weight }} kg</div>
        </q-card-section>
      </q-card>
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/birthday-cake.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">{{ account.height }} m</div>
        </q-card-section>
      </q-card>
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/birthday-cake.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">{{ account.distance }} km</div>
        </q-card-section>
      </q-card>
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/birthday-cake.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">{{ account.time }} h</div>
        </q-card-section>
      </q-card>
      <q-card class="my-card card text-center col-5">
        <q-card-section>
          <div>
            <q-icon name="img:images/icons/birthday-cake.webp" class="image q-pb-md" />
          </div>
          <div class="text-h6">{{ account.calories }} kcal</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import TitleComp from '@/components/TitleComp.vue';
import useDefaultStore from '@/stores/defaultStore.js';

const store = useDefaultStore();

// optional: image property
const account = {
  name: 'Maisam Mohammadi',
  email: 'riomaisam@gmail.com',
  age: 20, // the date instead of age
  weight: 73.3,
  height: 178,
  distance: 21,
  time: 40,
  calories: 45,
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
