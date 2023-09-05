<template>
  <div class="flex justify-center">
    <div class="container">
      <Notification></Notification>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Notification from './notifications/Notification.vue';

</script>
