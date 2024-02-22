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
    <div v-if="store.currentRecord == null">start, run, stop</div>
    <q-card v-if="store.currentRecord != null" bordered grid class="my-card bg-orange-5">
      <q-card-section>
        <div class="text-h6">{{ store.currentRecord.calories }} Kalorien</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-body1">{{ store.currentRecord.traveldistance }} km</div>
        <div class="text-body1">{{ store.currentRecord.runnedtime }}</div>
      </q-card-section>

      <q-card-section>
        <div class="text-caption">{{ store.currentRecord.runneddate }}</div>
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
store.getPerson();
store.getRecords();

const currentDate = new Date();

const clicked = ref(false);

const startCoordinates = ref({ latitude: '', longitude: '' });
const endCoordinates = ref({ latitude: '', longitude: '' });
const startTime = ref(null);
const endTime = ref(null);
const calculatedDistance = ref(0);
const calculatedCalories = ref(0);
const calculatedTime = ref(0);

const startRunning = () => {
  clicked.value = !clicked.value;
  startCoordinates.value = { latitude: '', longitude: '' };
  endCoordinates.value = { latitude: '', longitude: '' };

  startTime.value = new Date();

  navigator.geolocation.getCurrentPosition((location) => {
    startCoordinates.value = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  });
};

const stopRunning = () => {
  clicked.value = !clicked.value;

  endTime.value = new Date();

  navigator.geolocation.getCurrentPosition((location) => {
    endCoordinates.value = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  });

  calculatedTime.value = Math.floor((endTime.value - startTime.value) / 1000);

  const hours = Math.floor(calculatedTime.value / 3600);
  const minutes = Math.floor((calculatedTime.value % 3600) / 60);
  const seconds = calculatedTime.value % 60;

  calculatedDistance.value = parseFloat(
    (getDistance(startCoordinates.value, endCoordinates.value) / 1000).toFixed(2),
  );

  calculatedCalories.value = parseInt(
    calculatedDistance.value * parseFloat(store.person.weight) * 0.9,
  );

  store.currentRecord = {
    traveldistance: calculatedDistance.value,
    runnedtime: `${hours}:${minutes}:${seconds}`,
    calories: calculatedCalories.value,
    pid: store.person.pid,
    runneddate: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`,
  };

  store.addRecord();
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
