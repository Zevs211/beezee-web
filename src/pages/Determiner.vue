<template>
  <!-- Who are you -->
  <div
    v-if="characterClassIsEmpty"
    class="w-full h-screen flex flex-col items-center justify-center"
  >
    <h1 class="text-6xl text-black font-extrabold">
      Я здесь чтобы...
    </h1>
    <div class="w-full flex items-center justify-center mt-16">
      <div
        class="
          flex flex-col items-center justify-center
          rounded-xl
          shadow
          bg-emerald-200
          py-16 px-8 mr-12
          cursor-pointer select-none
          transition hover:shadow-xl transform hover:scale-110
        "
        @click="chooseClass('vendor')"
      >
        <div class="text-4xl text-black font-bold">Найти работу</div>
        <div class="text-3xl text-black mt-4">в качестве фрилансера</div>
      </div>
      <div
        class="
          flex flex-col items-center justify-center
          rounded-xl
          shadow
          bg-yellow-200
          py-16
          px-8
          cursor-pointer select-none
          transition hover:shadow-xl transform hover:scale-110
        "
        @click="chooseClass('client')"
      >
        <div class="text-4xl text-black font-bold">Заказать проект</div>
        <div class="text-3xl text-black mt-4">будучи клиентом</div>
      </div>
    </div>
  </div>
  <!-- I'm a vendor -->
  <div
    v-if="isVendor"
    class="w-full h-screen flex flex-col items-center justify-center"
  >
    <div class="w-full flex flex-col items-center">
      <h1 class="text-6xl text-black font-extrabold">Что вы умеете?</h1>
      <h4 class="text-2xl text-black mt-4">Перечислите ключевые навыки</h4>
      <div class="w-1/3 mt-10">
        <input
          type="text"
          class="w-full h-12 border border-gray-400 focus:border-black transition-colors rounded-xl
          px-4 outline-none text-xl bg-transparent"
          v-model="skillInputValue"
          @keypress="onInputKeyPress"
          maxlength="30"
          autofocus
          tabindex="1"
        >
      </div>
    </div>
    <div class="w-3/5 flex justify-center flex-wrap mt-6">
      <transition-group
        enter-active-class="opacity-100 transform scale-125"
        leave-active-class="opacity-0 transform scale-0"
        appear
        persisted
      >
        <span
          v-for="(skill, index) in skills"
          :key="index"
          class="
            h-12 border border-gray-400
            rounded-xl flex items-center
            text-xl px-4 bg-gray-100 cursor-pointer
            relative mt-4
            transition
          "
          :class="{ 'ml-4': index > 0 }"
          :tabindex="index + 2"
          @keydown="onSkillKeypress($event, skill)"
        >
          <span class="pr-4 transition-colors hover:text-blue-600">
            {{ `#${skill}` }}
          </span>
          <IconClose
            class="w-4 h-4 absolute top-2 right-2 transition-colors hover:text-red-600"
            @click="removeSkill(skill)"
          />
        </span>
      </transition-group>
    </div>
    <button
      class="
        h-10 border border-green-500 rounded-xl
        px-4 mt-12 text-xl bg-green-300
        transition hover:bg-green-500
      "
      :disabled="!isEnoughSkills"
      :class="{ 'opacity-30 cursor-not-allowed': !isEnoughSkills }"
      :tabindex="skills.length + 3"
      @click="onFindJob"
    >Найти работу</button>
  </div>
  <!-- I'm a client -->
  <div v-if="isClient" class="w-full h-screen flex flex-col items-center justify-center">
    <div class="w-full flex flex-col items-center">
      <h1 class="text-6xl text-black font-extrabold">У вас есть дизайн проекта?</h1>
      <h4 class="text-2xl text-black mt-4">или любая другая сопутствующая документация</h4>
    </div>
    <div class="w-full flex items-center justify-center mt-16">
      <div
        class="
          flex flex-col items-center justify-center
          rounded-xl
          shadow
          shadow-green-200
          bg-green-200
          py-16
          px-8
          mr-12
          cursor-pointer select-none
          transition hover:shadow-xl transform hover:scale-105
        "
        @click="openOrderCreation(true)"
      >
        <div class="text-4xl text-black font-bold">Да</div>
        <div class="text-3xl text-black mt-4">есть дизайн или ТЗ</div>
      </div>
      <div
        class="
          flex flex-col items-center justify-center
          rounded-xl
          shadow
          shadow-yellow-200
          bg-yellow-200
          py-16
          px-8
          cursor-pointer select-none
          transition hover:shadow-xl transform hover:scale-105
        "
        @click="openOrderCreation()"
      >
        <div class="text-4xl text-black font-bold">Нет</div>
        <div class="text-3xl text-black mt-4">но у меня есть идея проекта</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import IconClose from '../components/icons/Close.vue';

const router = useRouter();

const characterClass = ref('');
const skillInputValue = ref('');
const skills = ref([]);

const characterClassIsEmpty = computed(() => !characterClass.value);
const isVendor = computed(() => characterClass.value === 'vendor');
const isClient = computed(() => characterClass.value === 'client');
const isEnoughSkills = computed(() => skills.value.length > 0);

const chooseClass = (className) => characterClass.value = className;
const processInputValue = () => {
  const str = skillInputValue.value;
  if (str.length >= 30 || skills.value.includes(str)) return;
  if (str !== '') {
    skills.value.push(str);
  }
  skillInputValue.value = '';
};
const onInputKeyPress = (payload) => {
  if (payload.key === 'Enter') processInputValue();
};

const removeSkill = (skill) => {
  skills.value = skills.value.filter(s => s !== skill);
};
const onSkillKeypress = (e, skill) => {
  if (e.key === 'Backspace') removeSkill(skill);
};
const onFindJob = () => {
  // redirect to project list with applied filter by selected skills
  router.push({ name: 'jobs' });
};
const openOrderCreation = (hasFiles) => {
  // if hasFiles is true - open project creation page from files uploading
  // if false - from constructor
  router.push({ name: 'order-create', params: { hasFiles: !!hasFiles } });
};
</script>
