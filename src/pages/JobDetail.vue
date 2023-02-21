<template>
  <div class="w-full h-screen py-12 px-24 bg-slate-50">
    <div class="flex items-center">
      <ArrowLeft
        class="transition-transform transform hover:scale-125 cursor-pointer"
        @click="toJobList"
      />
      <h1 class="text-4xl ml-12">Создать складываемую кровать по чертежам</h1>
    </div>
    <div class="flex items-center flex-wrap ml-16 mt-6">
      <div v-for="tag in tags" :key="tag"
        class="rounded-xl bg-slate-300 mr-4 mb-2 py-1 px-4"
      >#{{ tag.name }}</div>
    </div>
    <div class="flex items-center flex-wrap ml-16 mt-1">
      <div v-for="skill in skills" :key="skill"
        class="rounded-xl bg-yellow-300 mr-4 py-1 px-4"
      >{{ skill.name }}</div>
    </div>
    <div class="ml-16 mt-4">
      <div>
        <span class="font-bold">Бюджет: </span>
        <span class="italic">{{ formatBudget(budget) }}</span>
      </div>
      <div class="mt-4 flex">
        <IconClock />
        <span class="ml-2 font-bold">Выполнить до:</span>
        <span class="ml-2">{{ formatDate(deadline) }}</span>
      </div>
    </div>
    <h4 class="text-2xl ml-16 mt-8">Описание:</h4>
    <div class="mt-2 ml-16 text-lg text-justify pr-12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu odio at turpis faucibus posuere. Vestibulum id est dolor. Cras tellus enim, malesuada vitae lectus et, condimentum mattis metus. Integer ac nunc varius, cursus ante eu, gravida enim. Sed nulla elit, condimentum quis dolor at, faucibus elementum est. Donec iaculis, lacus quis iaculis dignissim, nulla quam ornare augue, nec vehicula turpis nibh et purus. Nulla cursus ac mauris nec lobortis. Sed consequat justo sit amet orci finibus, eget fringilla felis fringilla. Aliquam id ex viverra, semper lorem vitae, dictum ex. Pellentesque feugiat turpis vitae faucibus efficitur. Nulla quis commodo ipsum. Aenean viverra orci mi, eu commodo sapien faucibus a.
      Aliquam tincidunt felis sem, ac mattis erat ornare feugiat. In hac habitasse platea dictumst. Nunc nec cursus lorem, sed auctor diam. Ut pretium pellentesque nulla, ac iaculis tortor semper vel. Praesent ac massa diam. Ut sit amet tempor dolor, auctor sollicitudin lorem. Aliquam sed pharetra eros. Nunc ut nibh condimentum, suscipit dui vitae, fringilla sapien. Proin ornare lacus odio, eget aliquam quam efficitur eget. Praesent lacinia at velit ut pulvinar. Nulla sit amet odio luctus, fringilla turpis iaculis, lacinia velit. Nullam accumsan libero sed ante tincidunt, tristique pulvinar justo vehicula. Nulla nec odio at urna convallis iaculis vitae in ipsum. Mauris imperdiet tortor in dapibus semper. Sed eu lacus placerat, consectetur eros id, pulvinar justo. In varius metus mattis ante iaculis, a porta metus vehicula.
    </div>
  </div>
</template>

<script setup>
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ArrowLeft from '../components/icons/ArrowLeft.vue';
import IconClock from '../components/icons/Clock.vue';
import { getRandomJobs } from '../mocks';

const router = useRouter();

const tags = ref([]);
const skills = ref([]);
const budget = ref(100);
const currency = ref({ id: 1, name: 'USD', symbol: '$' });
const deadline = ref(new Date());

onMounted(() => {
  const [job] = getRandomJobs(1);
  console.log(job);
  tags.value = job.tags;
  skills.value = job.skills;
  deadline.value = job.deadline;
});

const formatBudget = (budget) => `${currency.value.name} ${budget.toLocaleString()} ${currency.value.symbol}`;

const formatDate = (datetime) => format(datetime, 'd MMMM y', { locale: ru });

const toJobList = () => {
  router.push({ name: 'jobs' });
};
</script>
