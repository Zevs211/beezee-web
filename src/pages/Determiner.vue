<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-gray-100 bg-gradient-to-r from-blue-300 to-green-300">
    <div class="h-2/5">
      <div class="h-full flex items-end">
        <h1 class=" text-6xl text-black font-extrabold">
          I'm here to...
        </h1>
      </div>
    </div>
    <div class="w-full h-3/5 flex items-center">
      <div class="w-1/2 h-full flex justify-end mr-10 mt-32 select-none">
        <div class="bg-green-200 w-2/3 h-2/4 rounded-xl cursor-pointer flex flex-col items-center justify-center transition-shadow transition-transform hover:shadow-xl transform hover:scale-110">
          <div class="text-4xl text-black font-bold">Make money</div>
          <div class="text-3xl text-black mt-4">as a freelancer</div>
        </div>
      </div>
      <div class="w-1/2 h-full flex justify-start ml-10 mt-32 select-none">
        <div class="bg-yellow-200 w-2/3 h-2/4 rounded-xl cursor-pointer flex flex-col items-center justify-center transition-shadow transition-transform hover:shadow-xl transform hover:scale-110">
          <div class="text-4xl text-black font-bold">Make a project</div>
          <div class="text-3xl text-black mt-4">as a client</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
