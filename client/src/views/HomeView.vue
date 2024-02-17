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
        style="font-family: &quot;RobotoMedium&quot;"
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
import useDefaultStore from "@/stores/defaultStore.js";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { getDistance } from "geolib";

const store = useDefaultStore();
store.getRecords();

const columns = [
  {
    name: "calories",
    align: "left",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  {
    name: "distance",
    align: "left",
    label: "Distance",
    field: "traveldistance",
    sortable: true,
  },
  {
    name: "time",
    align: "left",
    label: "Time",
    field: "runnedtime",
    sortable: true,
  },
  {
    name: "date",
    align: "left",
    label: "Date",
    field: "runneddate",
    sortable: true,
  },
];

</script>

<style lang="scss" scoped>
.robotoBold {
  font-family: "RobotoBold";
}
</style>
