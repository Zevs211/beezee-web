<template>
  <div class="w-full py-12 px-24 bg-slate-50">
    <div class="w-full h-12 flex justify-between items-center shadow bg-white text-xl mb-8 rounded">
      <IconSearch class="ml-4" />
      <input
        type="text"
        class="w-full outline-none px-4"
        placeholder="Начните вводить тэги или ключевые слова..."
        v-model="search"
      >
      <IconAdjustments
        class="mr-4 cursor-pointer transition-transform transform hover:scale-125"
        @click="isFiltering = !isFiltering"
      />
    </div>
    <div v-if="isFiltering" class="rounded bg-slate-200 p-4 mb-8">
      <h4 class="font-bold text-xl mb-2">Фильтрация</h4>
      <div class="flex">
        <div>
          <div>Тэги</div>
          <select
            class="h-12 rounded shadow bg-white px-4 outline-none mt-2"
            v-model="tagsFilter"
          >
            <option value="деревообработка">деревообработка</option>
            <option value="металлообработка">металлообработка</option>
          </select>
        </div>
        <div class="ml-8">
          <div>Навыки</div>
          <select
            class="h-12 rounded shadow bg-white px-4 outline-none mt-2"
            v-model="skillsFilter"
          >
            <option value="деревообработка">деревообработка</option>
            <option value="шлифовка">шлифовка</option>
            <option value="металлообработка">металлообработка</option>
          </select>
        </div>
        <div class="ml-8 flex items-center">
          <div>
            <div>Бюджет от</div>
            <input
              type="number"
              class="h-12 px-4 outline-none rounded shadow mt-2"
              value="0"
            >
          </div>
          <div class="ml-2">
            <div>Бюджет до</div>
            <input
              type="number"
              class="h-12 px-4 outline-none rounded shadow mt-2"
              value="10000000"
            >
          </div>
          <div></div>
        </div>
      </div>
      <h4 class="font-bold text-xl mb-2 mt-4">Сортировка</h4>
      <div class="flex">
        <div>
          <div>По бюджету</div>
          <div class="flex items-center mt-2">
            <IconSortAscending
              class="cursor-pointer transition transform"
              :class="{ 'text-blue-500': sort.name === 'budget' && sort.mode === 'asc' }"
              @click="sort = { name: 'budget', mode: 'asc' }"
            />
            <IconSortDescending
              class="ml-2 cursor-pointer transition transform"
              :class="{ 'text-blue-500': sort.name === 'budget' && sort.mode === 'desc' }"
              @click="sort = { name: 'budget', mode: 'desc' }"
            />
          </div>
        </div>
        <div class="ml-8">
          <div>По сроку исполнения</div>
          <div class="flex items-center mt-2">
            <IconSortAscending
              class="cursor-pointer transition transform"
              :class="{ 'text-blue-500': sort.name === 'deadline' && sort.mode === 'asc' }"
              @click="sort = { name: 'deadline', mode: 'asc' }"
            />
            <IconSortDescending
              class="ml-2 cursor-pointer transition transform"
              :class="{ 'text-blue-500': sort.name === 'deadline' && sort.mode === 'desc' }"
              @click="sort = { name: 'deadline', mode: 'desc' }"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="(job, index) in jobs"
      :key="index"
      class="rounded shadow w-full px-8 py-4 cursor-pointer transition transform hover:scale-105 hover:shadow-xl bg-white"
      :class="{ 'mt-8': index > 0 }"
      @click="toJobDetail(job)"
    >
      <h4 class="font-bold text-2xl">{{ job.title }}</h4>
      <div class="text-lg mt-3">{{ job.description }}</div>
      <div class="mt-2">
        <span class="font-bold">Тэги: </span>
        <span class="italic text-cyan-600">{{ formatTags(job.tags) }}</span>
      </div>
      <div class="mt-2">
        <span class="font-bold">Необходимые навыки: </span>
        <span class="italic text-amber-600">{{ formatSkills(job.skills) }}</span>
      </div>
      <div class="mt-2">
        <span class="font-bold">Бюджет: </span>
        <span class="italic">{{ formatBudget(job) }}</span>
      </div>
      <div class="mt-2">
        <span class="font-bold">Выполнить до: </span>
        <span class="italic text-green-600">{{ formatDate(job.deadline) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { getRandomJobs } from '../mocks'
import IconSearch from '../components/icons/Search.vue'
import IconAdjustments from '../components/icons/Adjustments.vue'
import IconSortAscending from '../components/icons/SortAscending.vue'
import IconSortDescending from '../components/icons/SortDescending.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const search = ref('')
const isFiltering = ref(false)
const tagsFilter = ref('металлообработка')
const skillsFilter = ref('шлифовка')
const sort = ref({ name: 'deadline', mode: 'asc' })

const jobs = ref([])
onMounted(() => {
  jobs.value = getRandomJobs(10)
})

const formatTags = (tags) => {
  return tags.map(t => `#${t.name}`).join(', ')
}
const formatSkills = (skills) => {
  return skills.map(s => s.name).join(', ')
}
const formatBudget = (job) => {
  return `${job.currency.name} ${job.budget.toLocaleString()} ${job.currency.symbol}`
}
const formatDate = (datetime) => {
  return format(datetime, 'd MMMM y', { locale: ru })
}
const toJobDetail = (job) => {
  router.push({ name: 'job-detail', params: { id: job.id } })
}
</script>
