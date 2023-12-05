<template>
  <div class="column justify-center items-center">
    
  </div>
</template>

<script setup>
import TitleComp from "@/components/TitleComp.vue";
import useDefaultStore from "@/stores/defaultStore.js";

const store = useDefaultStore();

const data = [
  {
    calories: 456,
    distance: 2345,
    time: 30,
    date: "11.10.2023",
  },
  {
    calories: 367,
    distance: 1987,
    time: 23,
    date: "10.10.2023",
  },
  {
    calories: 134,
    distance: 457,
    time: 10,
    date: "09.10.2023",
  },
  {
    calories: 789,
    distance: 3450,
    time: 56,
    date: "08.10.2023",
  },
];
</script>
