<script>
export default {
    data() {
        return {
            members: [],
            member: '',
            activeTab: 0
        }
    },
    methods: {
        async getCrewData() {
            let res = await fetch('data/crew.json');
            let data = await res.json();

            this.members = data;
        }
    },
    computed: {
        getInformation() {
            return this.members[this.activeTab];
        }
    },
    created() {
        this.getCrewData();
    }
}
</script>

<template>
    <section class="crew-section">
        <div class="container">
            <h5 class="section-title fs-heading-100 ch-space-lg text-center-sm">
                <span class="number">02</span>
                Meet your crew
            </h5>
            
            <!-- Tab -->
            <div class="crew-section__tab text-center-md" v-if="members.length">
                <!-- preloading images -->
                <img
                    v-for="member in members"
                    :src="member.images.png"
                    style="display: none;"
                    preload
                >

                <div class="crew-section__info">
                    <!-- Info -->
                    <transition mode="out-in" name="fade" appear>
                        <div class="tab-info" :key="getInformation.id">
                            <h2 class="role heading fs-heading-200">{{ getInformation.role }}</h2>
                            <h2 class="title heading fs-heading-300">{{ getInformation.name }}</h2>
                            <p class="description | fs-txt-300 clr-accent">
                                {{ getInformation.bio }}
                            </p>
                        </div>
                    </transition>
    
                    <!-- Nav -->
                    <ul class="tab-nav">
                        <li
                            v-for="member in members"
                            :key="member.id"
                            @click="activeTab = member.id"
                            :class="{active: activeTab === member.id}"
                        ></li>
                    </ul>
                </div>

                <!-- Image -->
                <div class="crew-section__img">
                    <transition mode="out-in" name="slide" appear>
                        <img
                            :src="getInformation.images.png"
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

.crew-section {
    width: 100%;
    min-height: 100vh;
    background: url('../assets/crew/background-crew-desktop.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 212px;

    @include breakpoint-upto($dev-width-md) {
        background-image: url('../assets/crew/background-crew-tablet.jpg');
        padding-top: 136px;
    }

    @include breakpoint-upto($dev-width-sm) {
        background-image: url('../assets/crew/background-crew-mobile.jpg');
        padding-top: 88px;
    }

    &__tab {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        @include breakpoint-upto($dev-width-md) {
            flex-direction: column;
            align-items: center;
            padding-top: 60px;
        }
    }

    &__info {
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        @include breakpoint-upto($dev-width-md) {
            align-items: center;
            width: 100%;
        }

        .tab-nav {
            list-style: none;
            display: flex;
            gap: 24px;
            padding-left: 0;

            li {
                display: inline-block;
                width: 15px;
                height: 15px;
                background: $clr-primary-100;
                border-radius: 50%;
                cursor: pointer;
                opacity: 0.2;
                transition: $transition-200;

                &:hover {
                    opacity: 0.5;
                }

                &.active {
                    opacity: 1;
                }
            }
        }

        .tab-info {
            padding-bottom: 120px;

            @include breakpoint-upto($dev-width-md) {
                padding-bottom: 40px;
            }

            .role {
                opacity: 0.5;
            }

            .title {
                padding-top: 15px;
                padding-bottom: 27px;

                @include breakpoint-upto($dev-width-md) {
                    padding-top: 8px;
                    padding-bottom: 16px;
                }
            }

            .description {
                max-width: 444px;
            }
        }
    }

    &__img {
        width: 50%;
        display: flex;
        justify-content: flex-end;

        .tab-img {
            width: 80%;
        }
    }
}

// Transitions
.slide-enter-from {
    opacity: 0;
    transform: translateX(150px);
}
.slide-leave-to {
    opacity: 0;
    transform: translateX(-150px);
}
.slide-enter-active,
.slide-leave-active {
    transition: $transition-300;
}
</style>