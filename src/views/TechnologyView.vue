<script>
export default {
    data() {
        return {
            technologies: [],
            technology: '',
            activeTab: 0
        }
    },
    methods: {
        async getTechnologyData() {
            let res = await fetch('data/technology.json');
            let data = await res.json();

            this.technologies = data;
        }
    },
    computed: {
        getInformation() {
            return this.technologies[this.activeTab];
        }
    },
    created() {
        this.getTechnologyData();
    }
}
</script>

<template>
    <section class="technology-section">
        <div class="container">
            <h5 class="section-title fs-heading-100 ch-space-lg text-center-sm">
                <span class="number">04</span>
                SPACE LAUNCH 101
            </h5>

            <div class="destinations-section__tab" v-if="technologies.length">
                <!-- preloading images -->
                <img
                    v-for="technology in technologies"
                    :src="technology.images.portrait"
                    style="display: ;"
                    preload
                >
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../main.scss';

.technology-section {
    width: 100%;
    min-height: 100vh;
    background: url('../assets/technology/background-technology-desktop.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 212px;
    
    @include breakpoint-upto($dev-width-md) {
        background-image: url('../assets/technology/background-technology-tablet.jpg');
        padding-top: 136px;
    }

    @include breakpoint-upto($dev-width-sm) {
        background-image: url('../assets/technology/background-technology-mobile.jpg');
        padding-top: 88px;
    }
}
</style>