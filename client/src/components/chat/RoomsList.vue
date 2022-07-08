<template>
  <ul class="flex flex-col h-full">
    <li class="my-2 mx-1 flex px-5 justify-between items-center text-neutral-200 border-[2p]" v-for="(a, i) of 5" :key="i">
      <a href="#" class="flex items-center ">
        <span class="mr-2 font-bold text-2xl">#</span>
        <span class=" ">room {{ i }}</span>
      </a>
      <span class="flex tracking-widest">0/5</span>
    </li>
  </ul>
</template>
