<template>
  <!-- TITLE STEP -->
  <main class="flex flex-col items-center justify-center w-full h-screen bg-slate-100">
    <section
      class="flex flex-col items-center w-full"
    >
      <div class="text-4xl">{{ currentFormField.name }}</div>
      <div v-if="currentFormField?.helper" class="mt-3 text-lg">
        {{ currentFormField?.helper }}
      </div>
      <div class="flex justify-center w-2/3">
        <component
          class="mt-8"
          :is="currentFormField.component"
          v-bind="currentFormField.props"
          v-model="currentFormField.value"
        />
      </div>
    </section>
    <div class="flex items-center mt-8">
      <FormButton class="bg-red-500">Отмена</FormButton>
      <FormButton
        v-show="currentFormField?.index > 0"
        class="ml-4 bg-blue-500"
        @click="onPreviousField"
      >Назад</FormButton>
      <FormButton
        v-show="currentFormField?.index < formFieldsSchema.length - 1"
        class="ml-4 bg-blue-500"
        @click="onNextField"
      >Далее</FormButton>
    </div>
  </main>
  <!-- DEADLINE STEP -->
  <!-- <section
    class="flex flex-col items-center justify-center w-full h-screen px-24 py-12 bg-slate-100"
  >
    <div class="text-4xl">До какого срока нужно выполнить проект?</div>
    <DatePicker class="mt-8" v-model="deadline" />
  </section> -->
</template>

<script setup>
import { ref, shallowRef } from 'vue';
// import { useRoute } from 'vue-router';
import FormButton from '../../components/FormButton.vue';
import FormInput from './components/form-input.vue';
import FormTextarea from './components/form-textarea.vue';
import FormCurrencyInput from './components/form-currency-input.vue';
// import DatePicker from '../../components/DatePicker.vue';

// const routeParams = useRoute().params;
// const hasFiles = computed(() => routeParams.hasFiles);

const formFieldsSchema = ref([{
  index: 0,
  name: 'Придумайте название для проекта',
  helper: 'Название должно быть лаконичным и содержательным',
  label: 'title',
  component: shallowRef(FormInput),
  value: '',
  props: { maxlength: 255 },
}, {
  index: 1,
  name: 'Опишите что нужно сделать',
  label: 'description',
  component: shallowRef(FormTextarea),
  value: '',
  props: { rows: 12 },
}, {
  index: 2,
  name: 'Укажите бюджет проекта',
  label: 'budget',
  component: shallowRef(FormCurrencyInput),
  value: 0,
  props: {
    currency: { name: 'USD', symbol: '$' },
  },
}]);

const currentFormField = ref(formFieldsSchema.value[0]);

const onPreviousField = () => {
  const index = currentFormField.value.index - 1;
  currentFormField.value = formFieldsSchema.value[index];
};
const onNextField = () => {
  const index = currentFormField.value.index + 1;
  currentFormField.value = formFieldsSchema.value[index];
};

// const deadline = ref(null);
</script>
