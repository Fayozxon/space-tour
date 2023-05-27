<script>
export default {
    data() {
        return {
            destinations: [],
            destination: '',
            activeTab: 0
        }
    },
    methods: {
        async getDestinationsData() {
            let res = await fetch('data/destinations.json');
            let data = await res.json();

            this.destinations = data;
        }
    },
    computed: {
        getInformation() {
            return this.destinations[this.activeTab];
        }
    },
    created() {
        this.getDestinationsData();
    }
}
</script>

<template>
    <section class="destinations-section">
        <div class="container">
            <h5 class="section-title fs-heading-100 ch-space-lg text-center-sm">
                <span class="number">01</span>
                Pick your destination
            </h5>

            <div class="destinations-section__tab" v-if="destinations.length">
                <!-- preloading images -->
                <img
                    v-for="destination in destinations"
                    :src="destination.images.png"
                    style="display: none;"
                    preload
                >

                <!-- Image -->
                <div class="destinations-section__img">
                    <transition mode="out-in" name="fade" appear>
                        <img
                            :src="getInformation.images.png"
                            :key="getInformation.id"
                            :alt="`${getInformation.name} image`"
                        preload>
                    </transition>
                </div>

                <!-- Nav -->
                <div class="destinations-section__info text-center-md">

                    <ul class="tab-nav">
                        <li
                            v-for="destination in destinations"
                            :key="destination.id"
                            @click="activeTab = destination.id"
                            :class="{active: activeTab === destination.id}"
                            class="fs-txt-200 ch-space-md"
                        >{{ destination.name }}</li>
                    </ul>
    
                    <!-- Info -->
                    <transition mode="out-in" name="fade" appear>
                        <div class="tab-info" :key="getInformation.id">
                            <h2 class="title heading fs-heading-400">{{ getInformation.name }}</h2>
                            <p class="description | fs-txt-300 clr-accent">
                                {{ getInformation.description }}
                            </p>
                            <span class="line"></span>
    
                            <div class="tab-distance">
                                <p class="fs-txt-100 clr-accent ch-space-sm">AVG. DISTANCE</p>
                                <p class="fs-txt-100 clr-accent ch-space-sm">EST. TRAVEL TIME</p>
                                <h5 class="fs-heading-100 heading">{{ getInformation.distance }}</h5>
                                <h5 class="fs-heading-100 heading">{{ getInformation.travel }}</h5>
                            </div>
                        </div>
                    </transition>

                </div>
            </div>
            
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../main.scss';

.destinations-section {
    width: 100%;
    min-height: 100vh;
    background: url('../assets/destination/background-destination-desktop.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 212px;

    @include breakpoint-upto($dev-width-md) {
        background-image: url('../assets/destination/background-destination-tablet.jpg');
        padding-top: 136px;
    }

    @include breakpoint-upto($dev-width-sm) {
        background-image: url('../assets/destination/background-destination-mobile.jpg');
        padding-top: 88px;
    }

    // Tab
    &__tab {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 44px;

        @include breakpoint-upto($dev-width-md) {
            flex-direction: column;
            padding-top: 60px;
            padding-bottom: 7rem;

            .fs-heading-100 {
                font-size: 28px;
            }
        }
    }

    &__img {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 445px;
            width: 100%;

            @include breakpoint-upto($dev-width-md) {
                max-width: 300px;
                margin-bottom: 53px;
            }
        }
    }

    &__info {
        max-width: 445px;
        width: 50%;

        @include breakpoint-upto($dev-width-md) {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 573px;
            width: 100%;
        }

        .tab-nav {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 35px;
            text-transform: uppercase;
            padding: 0;
            padding-bottom: 37px;

            li {
                position: relative;
                color: $clr-accent-400;
                cursor: pointer;
                transition: $transition-300;
                user-select: none;

                &::before {
                    content: '';
                    position: absolute;
                    top: 31px;
                    width: 97%;
                    height: 3px;
                    background: $clr-primary-100;
                    opacity: 0;
                    transition: $transition-300;
                }

                &.active {
                    color: $clr-primary-100;

                    &::before {
                        opacity: 1;
                    }
                }
            }
        }

        .tab-info {
            .description {
                max-width: 100%;
                padding-top: 26px;
                padding-bottom: 34px;
                line-height: 32px;
            }

            .line {
                display: inline-block;
                width: 100%;
                height: 1px;
                background: #383B4B;
            }

            .tab-distance {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding-top: 22px;
                row-gap: 12px;

                & * {
                    margin: 0;
                }
            }
        }
    }
}
</style>