<template>
  <div class="justify-center robotoBold">
    <div class="text-center">
      <div class="q-pa-md q-gutter-sm">
        <q-btn
          v-if="clicked"
          color="blue"
          class="robotoBold text-h6 q-pa-lg"
          label="Stop"
          @click="stopRunning()"
        />
        <q-btn
          v-else
          color="blue"
          class="robotoBold text-h6 q-pa-lg"
          label="Start"
          @click="startRunning()"
        />
      </div>
    </div>
    <div v-if="store.currentRecord == null">Bevore running, please click the start!</div>
    <q-card v-if="store.currentRecord != null" bordered grid class="my-card bg-orange-5">
      <q-card-section>
        <div class="text-h6">{{ store.currentRecord.calories }} Kalorien</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-body1">{{ store.currentRecord.distance }} m</div>
        <div class="text-body1">{{ store.currentRecord.time }} min</div>
      </q-card-section>

      <q-card-section>
        <div class="text-caption">{{ store.currentRecord.date }}</div>
      </q-card-section>
    </q-card>
    <div class="q-pa-md">
      <q-table
        grid
        card-class="bg-orange-5 text-dark"
        style="font-family: 'RobotoMedium'"
        title="Letzte Aufnahmen"
        :columns="columns"
        :rows="store.records"
        row-key="name"
        hide-header
      >
      </q-table>
    </div>
  </div>
</template>

<script setup>
import useDefaultStore from '@/stores/defaultStore.js';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { getDistance } from 'geolib';

const store = useDefaultStore();
store.getRecords();

const clicked = ref(false);

const startRunning = () => {
  clicked.value = !clicked.value;
  navigator.geolocation.getCurrentPosition((location) => {
    console.log(
      'Start > latitude:',
      location.coords.latitude,
      'longitude:',
      location.coords.longitude,
    );
  });
  store.currentRecord = {
    calories: 120000,
    distance: 2356,
    time: 30,
    date: '13.10.2023',
  };
};

const stopRunning = () => {
  clicked.value = !clicked.value;
  navigator.geolocation.getCurrentPosition((location) => {
    console.log(
      'Stop > latitude:',
      location.coords.latitude,
      'longitude:',
      location.coords.longitude,
    );
  });
};

const columns = [
  {
    name: 'calories',
    align: 'left',
    label: 'Calories',
    field: 'calories',
    sortable: true,
  },
  {
    name: 'distance',
    align: 'left',
    label: 'Distance',
    field: 'traveldistance',
    sortable: true,
  },
  {
    name: 'time',
    align: 'left',
    label: 'Time',
    field: 'runnedtime',
    sortable: true,
  },
  {
    name: 'date',
    align: 'left',
    label: 'Date',
    field: 'runneddate',
    sortable: true,
  },
];
</script>

<style lang="scss" scoped>
.robotoBold {
  font-family: 'RobotoBold';
}
</style>
