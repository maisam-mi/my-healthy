<template>
  <q-header class="bg-primary text-white robotoBold" height-hint="98">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="r_menu"
        @click="$emit('toggleLeftDrawer')"
      />

      <q-toolbar-title>
        <div class="row items-center">
          <img src="/images/logo/logo.svg" style="width: 38px" />
          <span class="q-ml-sm"> my healthy </span>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
defineEmits(["toggleLeftDrawer"]);
</script>

<style scoped>
.rotate-on-hover {
  transform: rotate(0);
  transition: transform 0.8s ease-in-out;
}
.rotate-on-hover:hover {
  transform: rotate(-360deg);
  transition: transform 0.8s ease-in-out;
}

.robotoBold {
  font-family: 'RobotoBold';
}
</style>
