<template>
  <div class="flex justify-center w-full h-screen">
    <div class="container h-full px-8">
      <div class="flex justify-center items-center w-full h-32">LOGO</div>
        <form @submit.prevent="sendPayload">
          <div class="flex justify-center items-center">
            <div class="bg-gray-100 px-8 py-5 rounded-lg">
              <div v-if="isSignInForm">
                <div>Email address</div>
                <FormInput class="mt-2" v-model="signInPayload.email"></FormInput>
                <div class="flex justify-between mt-8">
                  <div>Password</div>
                  <div class="text-blue-400"><a href="/forgot-password">Forgot password?</a></div>
                </div>
                <FormInput class="mt-2" v-model="signInPayload.password"></FormInput>
                <div class="flex items-center justify-between mt-8"></div>
              </div>
              <div v-else>
                <div>Email address</div>
                <FormInput class="mt-2" v-model="signUpPayload.email"></FormInput>
                <div class="flex justify-between mt-8">
                  <div>Password</div>
                </div>
                <FormInput class="mt-2" v-model="signUpPayload.password"></FormInput>
                <div class="mt-8">FirstName</div>
                <FormInput class="mt-2" v-model="signUpPayload.firstName"></FormInput>
                <div class="mt-8">MiddleName</div>
                <FormInput class="mt-2" v-model="signUpPayload.middleName"></FormInput>
                <div class="mt-8">LastName</div>
                <FormInput class="mt-2 mb-8" v-model="signUpPayload.lastName"></FormInput>
              </div>

              <a class="ml-1 text-orange-400 select-none cursor-pointer"
                @click.prevent="mode = isSignInForm ? 'signIn' : 'signUp'"
              >{{ isSignInForm ? 'Sign Up' : 'Sign In' }}</a>
              <div class="mt-2">
                <FormButton class="hover:scale-100 hover:bg-red-600 bg-red-500 text-black"
                >Cancel</FormButton>
                <FormButton class="ml-4 hover:scale-100 hover:bg-green-600 bg-green-500
                text-white" type="submit">{{ isSignInForm ? 'Sign In' : 'Sign Up' }}</FormButton>
              </div>
            </div>
          </div>
        </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { isNil } from 'lodash';
import api from '../api';
import FormInput from './order-create/components/form-input.vue';
import FormButton from '../components/FormButton.vue';

const signUpPayload = ref({
  email: '',
  password: '',
  firstName: '',
  middleName: '',
  lastName: '',
});
const signInPayload = ref({
  email: '',
  password: '',
});
const isOpen = ref(false);
const mode = ref('signIn');
const isSignInForm = computed(() => mode.value === 'signUp');

const signIn = async () => {
  try {
    const { data } = await api.auth.login({
      email: signInPayload.value.email,
      password: signInPayload.value.password,
    });
    if (!isNil(data.error)) {
      throw new Error(data.error);
    } isOpen.value = false;
  } catch (err) {
    throw new Error(err.message);
  }
};
const signUp = async () => {
  try {
    const { data } = await api.auth.register({
      email: signUpPayload.value.email,
      password: signUpPayload.value.password,
      firstName: signUpPayload.value.firstName,
      middleName: signUpPayload.value.middleName,
      lastName: signUpPayload.value.lastName,
    });
    if (!isNil(data.error)) {
      throw new Error(data.error);
    } isOpen.value = false;
  } catch (err) {
    throw new Error(err.message);
  }
};
const sendPayload = () => {
  if (isSignInForm.value) {
    signIn();
  } else {
    signUp();
  }
};
</script>
