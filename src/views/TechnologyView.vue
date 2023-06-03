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

            <div class="technology-section__tab" v-if="technologies.length">
                <!-- preloading images -->
                <img
                    v-for="technology in technologies"
                    :src="technology.images.portrait"
                    style="display: none;"
                    preload
                >

                <!-- Nav -->
                <ul class="tab-nav">
                    <li
                        v-for="technology in technologies"
                        :key="technology.id"
                        @click="activeTab = technology.id"
                        :class="{active: activeTab === technology.id}"
                        class="fs-heading-200 heading"
                    >
                        {{ technology.id+1 }}
                    </li>
                </ul>

                <!-- Info -->
                <transition mode="out-in" name="fade" appear>
                    <div class="tab-info text-center-md" :key="getInformation.id">
                        <h2 class="fs-txt-200 clr-accent ch-space-md">THE TERMINOLOGY…</h2>
                        <h2 class="title heading fs-heading-300">{{ getInformation.name }}</h2>
                        <p class="description | fs-txt-300 clr-accent line-height-txt">
                            {{ getInformation.description }}
                        </p>
                    </div>
                </transition>

                <!-- Image -->
                <div class="technology-section__img">
                    <transition mode="out-in" name="fade" appear>
                        <img
                            :src="getInformation.images.portrait"
                            :key="getInformation.id"
                            :alt="`${getInformation.name} image`"
                            class="tab-img"
                        preload>
                    </transition>
                </div>

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

    &__tab {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 60vh;

        @include breakpoint-upto($dev-width-md) {
            flex-direction: column;
            align-items: center;
            gap: 44px;
        }

        @include breakpoint-upto($dev-width-sm) {
            gap: 26px;
        }

        .tab-nav {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            list-style: none;
            padding: 0;

            @include breakpoint-upto($dev-width-md) {
                gap: 1rem;
                flex-direction: row;
                order: 2;
            }

            li {
                $size: 80px;
                display: inline-block;
                width: $size;
                height: $size;
                border-radius: 50%;
                border: 1px solid rgba(255, 255, 255, 0.25);
                cursor: pointer;
                text-align: center;
                line-height: $size;
                transition: $transition-200;

                @include breakpoint-upto($dev-width-md) {
                    $size: 60px;
                    width: $size;
                    height: $size;
                    line-height: $size;
                }

                @include breakpoint-upto($dev-width-sm) {
                    $size: 40px;
                    width: $size;
                    height: $size;
                    line-height: $size;
                }

                &:hover {
                    border-color: $clr-primary-100;
                }

                &.active {
                    background: $clr-primary-100;
                    color: $clr-primary-500;
                }
            }
        }

        .tab-info {
            .title {
                padding-top: 11px;
                padding-bottom: 17px;
            }
            .description {
                max-width: 444px;
            }

            @include breakpoint-upto($dev-width-md) {
                order: 3;
                padding-bottom: 160px;
            }
        }
    }

    &__img {
        position: relative;
        width: 35%;

        @include breakpoint-upto($dev-width-md) {
            width: 100%;
            order: 1;
            height: 310px;
            margin-top: 60px;
        }

        @include breakpoint-upto($dev-width-sm) {
            margin-top: 2rem;
            height: 170px;
        }

        .tab-img {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(20%, -50%);

            @include breakpoint-upto($dev-width-md) {
                position: static;
                transform: translate(0,0);
                width: 100%;
                height: 310px;
                object-fit: cover;
            }

            @include breakpoint-upto($dev-width-sm) {
                height: 170px;
            }
        }
    }
}
</style>