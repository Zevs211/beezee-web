import { ref, computed } from 'vue';
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notifications', () => {  
  const notifications = ref([]);

  const getAllNotifications = computed(() => notifications);

  const addNotification = (notification) => {
    notifications.value.push(notification)
  };
  const deleteOne = (_id) => {
    notifications.value.forEach((notification, index) => {
      if (notification._id === _id) notifications.value.splice(index, 1)
    });
  };

  return { notifications, getAllNotifications, addNotification, deleteOne }
})