<template>
  <div class="col-12 col-sm-10 col-md-8 justify-center robotoBold">
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
    <div v-if="store.currentRecord == null" class="text-center">start, run, stop</div>
    <div class="q-my-sm q-px-lg" v-if="store.currentRecord != null">
      <q-card flat bordered class="bg-orange-5 q-gutter-sm">
        <div>{{ store.currentRecord.calories }} calories</div>
        <div class="row">
          <div class="col">{{ store.currentRecord.traveldistance }} m</div>
          <div class="col">{{ store.currentRecord.runnedtime }}</div>
        </div>
        <div>
          {{ store.currentRecord.runneddate }}
        </div>
      </q-card>
    </div>
    <div class="q-pa-md">
      <q-table
        grid
        card-class="text-dark"
        style="font-family: 'RobotoMedium'"
        title="Letzte Aufnahmen"
        :columns="columns"
        :rows="store.records"
        :pagination="{ rowsPerPage: 4 }"
        row-key="name"
        hide-header
        hide-bottom
      >
        <template v-slot:item="props">
          <div class="q-my-sm col-12">
            <q-card flat bordered class="bg-orange-5 q-gutter-sm">
              <div>{{ props.row.calories }} calories</div>
              <div class="row">
                <div class="col">{{ props.row.traveldistance }} m</div>
                <div class="col">{{ props.row.runnedtime }}</div>
              </div>
              <div>
                {{ props.row.runneddate }}
              </div>
            </q-card>
          </div>
        </template>
      </q-table>
      <div v-if="store.records.length <= 0" class="">make your first record</div>
    </div>
  </div>
</template>

<script setup>
import myHealthyStore from '@/stores/defaultStore.js';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { getDistance } from 'geolib';
import { useSpeechSynthesis } from '@vueuse/core';

const store = myHealthyStore();
store.getPerson(store.person.email);
store.getRecords(store.person.pid);

const textToSpeak = ref('');
const speech = useSpeechSynthesis(textToSpeak);

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

  textToSpeak.value = 'You can start to run';

  speech.speak();
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

  textToSpeak.value = `You burned ${store.currentRecord.calories} calories by jogging ${store.currentRecord.traveldistance} meter.`;
  speech.speak();

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
