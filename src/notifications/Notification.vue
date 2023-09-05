<template>
  <div class="fixed flex flex-col-reverse justify-start pb-2 right-0 bottom-0 w-2/6 h-full overflow-auto">
    <div v-for="(notification, index) in notifications" :key="index">
      <NotificationCard 
        :text="notification.text" 
        :dangerous="notification.dangerous"
        @click.prevent="deleteOne(notification._id)"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useNotificationStore } from '../store/index';
import NotificationCard from './NotificationCard.vue';

const store = useNotificationStore();
const { notifications } = storeToRefs(store);
const { deleteOne } = store;
</script>
