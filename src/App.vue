<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';

export default {
  components: { Header }
}
</script>

<template>
  <main>
    <!-- preloading images -->
    <img src="images/crew/image-douglas-hurley.png" style="display: none;" preload>
    <img src="images/destination/image-moon.png" style="display: none;" preload>
    <img src="images/technology/image-launch-vehicle-portrait.jpg" style="display: none;" preload>

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
// from bottom
.fade-top-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.fade-top-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.fade-top-enter-active,
.fade-top-leave-active {
  transition: $transition-300;
}
</style>
