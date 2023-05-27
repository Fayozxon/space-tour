<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';

export default {
  components: { Header }
}
</script>

<template>
  <main>

    <Header></Header>

    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </RouterView>

  </main>
</template>

<style lang="scss">
@import './main.scss';
/* Fade transitions */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: $transition-300;
}
</style>
