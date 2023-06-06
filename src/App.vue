<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';

export default {
  data() {
    return {
      sources: [
        'images/crew/image-douglas-hurley.png',
        'images/destination/image-moon.png',
        'images/technology/image-launch-vehicle-portrait.jpg'
      ]
    }
  },
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

    <!-- preloading images -->
    <img v-for="source in sources" :src="source" style="display: none;" preload>

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
