<template>
  <div class="justify-center robotoBold">
    <div class="text-center">
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="blue" class="robotoBold text-h6 q-pa-lg" label="Start" />
      </div>
    </div>
    <q-card bordered grid class="my-card bg-orange-5">
      <q-card-section>
        <div class="text-h6">120000 Kalorien</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-body1">2356m</div>
        <div class="text-body1">30 min</div>
      </q-card-section>

      <q-card-section>
        <div class="text-caption">13.10.2023</div>
      </q-card-section>
    </q-card>
    <div class="q-pa-md">
      <q-table
        grid
        card-class="bg-orange-5 text-dark"
        style="font-family: 'RobotoMedium'"
        title="Letzte Aufnahmen"
        :rows="data"
        row-key="name"
        hide-header
      >
      </q-table>
    </div>
  </div>
</template>

<script setup>
import TitleComp from '@/components/TitleComp.vue';
import useDefaultStore from '@/stores/defaultStore.js';

const store = useDefaultStore();

const data = [
  {
    calories: 456,
    distance: 2345,
    time: 30,
    date: '11.10.2023',
  },
  {
    calories: 367,
    distance: 1987,
    time: 23,
    date: '10.10.2023',
  },
  {
    calories: 134,
    distance: 457,
    time: 10,
    date: '09.10.2023',
  },
  {
    calories: 789,
    distance: 3450,
    time: 56,
    date: '08.10.2023',
  },
];
</script>

<style lang="scss" scoped>
.robotoBold {
  font-family: 'RobotoBold';
}
</style>
