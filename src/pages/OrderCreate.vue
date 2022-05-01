<template>
  <!-- TITLE STEP -->
  <section
    class="w-full h-screen bg-slate-100 flex flex-col items-center justify-center py-12 px-24"
  >
    <div class="text-4xl">Придумайте название для проекта</div>
    <div class="mt-3 text-lg">Название должно быть лаконичным и содержательным</div>
    <div class="w-2/3">
      <input
        type="text"
        class="w-full h-12 outline-none rounded shadow px-4 text-xl mt-8"
        :maxlength="maxTitleLength"
        v-model="title"
      >
      <div class="self-start mt-2">
        <span>{{ title.length }}</span>
        <span class="mx-2">/</span>
        <span>{{ maxTitleLength }}</span>
      </div>
    </div>
    <div class="flex items-center">
      <button
        class="rounded shadow bg-red-500 text-white py-2 px-4 transition transform hover:scale-110 hover:shadow-xl mt-12"
      >
        Отмена
      </button>
      <button
        class="rounded shadow bg-blue-500 text-white py-2 px-4 transition transform hover:scale-110 hover:shadow-xl mt-12 ml-4"
      >
        Далее
      </button>
    </div>
  </section>
  <!-- DESCRIPTION STEP -->
  <section
    class="w-full h-screen bg-slate-100 flex flex-col items-center justify-center py-12 px-24"
  >
    <div class="text-4xl">Опишите что нужно сделать</div>
    <div class="w-2/3">
      <textarea
        type="text"
        class="w-full outline-none rounded shadow px-4 py-2 text-xl mt-8"
        :maxlength="maxDescriptionLength"
        rows="12"
        v-model="description"
      ></textarea>
      <div class="self-start mt-2">
        <span>{{ description.length }}</span>
        <span class="mx-2">/</span>
        <span>{{ maxDescriptionLength }}</span>
      </div>
    </div>
    <div class="flex items-center">
      <button
        class="rounded shadow bg-red-500 text-white py-2 px-4 transition transform hover:scale-110 hover:shadow-xl mt-12"
      >
        Отмена
      </button>
      <button
        class="rounded shadow bg-blue-500 text-white py-2 px-4 transition transform hover:scale-110 hover:shadow-xl mt-12 ml-4"
      >
        Назад
      </button>
      <button
        class="rounded shadow bg-blue-500 text-white py-2 px-4 transition transform hover:scale-110 hover:shadow-xl mt-12 ml-4"
      >
        Далее
      </button>
    </div>
  </section>
  <!-- BUDGET STEP -->
  <section
    class="w-full h-screen bg-slate-100 flex flex-col items-center justify-center py-12 px-24"
  >
    <div class="text-4xl">Укажите бюджет проекта</div>
    <div class="w-1/3 flex items-center text-xl mt-8">
      <span class="h-full rounded-l shadow bg-slate-200 px-4 flex items-center border border-gray-400">{{ currency.name }}</span>
      <input
        type="number"
        class="w-full h-12 outline-none shadow px-4"
        v-model="budget"
      >
      <span class="h-full rounded-r shadow bg-slate-200 px-4 flex items-center border border-gray-400">
        {{ currency.symbol }}
      </span>
    </div>
    <div class="flex items-center">
      <button
        class="rounded shadow bg-red-500 text-white py-2 px-4 transition transform hover:scale-110 hover:shadow-xl mt-12"
      >
        Отмена
      </button>
      <button
        class="rounded shadow bg-blue-500 text-white py-2 px-4 transition transform hover:scale-110 hover:shadow-xl mt-12 ml-4"
      >
        Назад
      </button>
      <button
        class="rounded shadow bg-blue-500 text-white py-2 px-4 transition transform hover:scale-110 hover:shadow-xl mt-12 ml-4"
      >
        Далее
      </button>
    </div>
  </section>
  <!-- DEADLINE STEP -->
  <section
    class="w-full h-screen bg-slate-100 flex flex-col items-center justify-center py-12 px-24"
  >
    <div class="text-4xl">До какого срока нужно выполнить проект?</div>
    <DatePicker class="mt-8" v-model="deadline" />
    <div class="flex items-center">
      <button
        class="rounded shadow bg-red-500 text-white py-2 px-4 transition transform hover:scale-110 hover:shadow-xl mt-12"
      >
        Отмена
      </button>
      <button
        class="rounded shadow bg-blue-500 text-white py-2 px-4 transition transform hover:scale-110 hover:shadow-xl mt-12 ml-4"
      >
        Назад
      </button>
      <button
        class="rounded shadow bg-blue-500 text-white py-2 px-4 transition transform hover:scale-110 hover:shadow-xl mt-12 ml-4"
      >
        Далее
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import DatePicker from '../components/DatePicker.vue'

const routeParams = useRoute().params
const hasFiles = computed(() => routeParams.hasFiles)

const title = ref('')
const description = ref('')
const maxTitleLength = ref(255)
const maxDescriptionLength = ref(255)
const budget = ref(0)
const currency = ref({ id: 1, name: 'USD', symbol: '$' })
const deadline = ref(null)
</script>
