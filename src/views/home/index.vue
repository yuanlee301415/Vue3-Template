<script setup>
defineOptions({ name: 'HomeView' })
</script>

<template>
  <div class="p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center gap-x-4 bg-[--color-background-mute] text-[--color-text]">
    <div class="shrink-0">
      <img class="size-12" src="@/assets/logo.svg" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-2xl font-medium">ChitChat</div>
      <p class="text-xl">You have a new message!</p>
    </div>
  </div>
</template>
