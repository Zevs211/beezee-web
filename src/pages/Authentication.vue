<template>
  <div class="flex justify-center w-full h-screen">
    <div class="container h-full px-8">
      <div class="flex justify-center items-center w-full h-32">LOGO</div>
        <form @submit.prevent="formSubmit">
          <div class="flex justify-center items-center">
          <div class="bg-gray-100 px-8 py-5 rounded-lg">
            <div>Email address</div>
            <FormInput class="mt-2" v-model="form.email"></FormInput>
            <div class="flex justify-between mt-8">
              <div>Password</div>
              <div class="text-blue-400"><a href="www.google.com">Forgot password?</a></div>
            </div>
            <FormInput class="mt-2" v-model="form.password"></FormInput>
            <div class="flex items-center justify-between mt-8">
              <a
                class="text-orange-400 select-none cursor-pointer"
                @click.prevent="mode = isSignInForm ? 'signIn' : 'signUp'"
                >{{ isSignInForm ? 'Sign Up' : 'Sign In' }}</a>
              <div>
                <FormButton class="hover:scale-100 hover:bg-red-600 bg-red-500 text-black"
                >Cancel</FormButton>
                <FormButton
                  type="submit"
                  class="ml-4 hover:scale-100 hover:bg-green-600 bg-green-500 text-white"
                >{{ isSignInForm ? 'Sign In' : 'Sign Up' }}</FormButton>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { isNil } from 'lodash'
import api from '../api';
import FormInput from './order-create/components/form-input.vue';
import FormButton from '../components/FormButton.vue';

const isOpen = ref(false);
const form = ref({
  email: '',
  password: '',
});
const mode = ref('signIn');
const isSignInForm = computed(() => mode.value === 'signUp');

const signIn = async () => {
  try {
    const { data } = await api.auth.login({
      email: form.value.email,
      password: form.value.password,
    });
    if (!isNil(data.error)) {
      throw new Error(data.error);
    } isOpen.value = false;
  } catch (err) {
    console.log(err);
  }
};
const signUp = async () => {
  try {
    const { data } = await api.auth.register({
      email: form.value.email,
      password: form.value.password,
    });
    if (!isNil(data.error)) {
      throw new Error(data.error);
    } isOpen.value = false;
  } catch (err) {
    console.log(err);
  }
};
const formSubmit = () => {
  if (isSignInForm.value) {
    signIn();
  } else {
    signUp();
  }
};

</script>
