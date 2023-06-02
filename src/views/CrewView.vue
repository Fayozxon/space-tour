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
        },
        autoChangeTab() {
            setInterval(() => {
                if (this.activeTab == 3) {
                    this.activeTab = 0;
                    return;
                }
                this.activeTab++;
            }, 6000);
        }
    },
    computed: {
        getInformation() {
            return this.members[this.activeTab];
        }
    },
    created() {
        this.getCrewData();
    },
    mounted() {
        this.autoChangeTab();
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
        display: grid;
        grid-template-columns: 1fr 0.7fr;
        grid-template-rows: 1fr 0.1fr;
        grid-template-areas:
            "info  img"
            "nav   img";
        min-height: 65vh;
        overflow: hidden;
        padding-top: 154px;

        @include breakpoint-upto($dev-width-md) {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 60px;
        }

        @include breakpoint-upto($dev-width-sm) {
            padding-top: 32px;
            flex-direction: column-reverse;
        }
    }

    .tab-nav {
        grid-area: nav;
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

            @include breakpoint-upto($dev-width-sm) {
                width: 10px;
                height: 10px;
                margin: 32px 0;
            }

            &:hover {
                opacity: 0.5;
            }

            &.active {
                opacity: 1;
            }
        }
    }

    .tab-info {
        grid-area: info;

        @include breakpoint-upto($dev-width-md) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
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

            @include breakpoint-upto($dev-width-md) {
                max-width: 80%;
                padding-bottom: 40px;
            }

            @include breakpoint-upto($dev-width-sm) {
                max-width: 100%;
            }
        }
    }

    &__img {
        position: relative;
        grid-area: img;

        @include breakpoint-upto($dev-width-sm) {
            width: 100%;
            height: 327px;
            border-bottom: 2px solid #383B4B;
            display: flex;
            justify-content: center;
        }

        .tab-img {
            position: absolute;
            left: 0;
            bottom: 0;

            @include breakpoint-upto($dev-width-md) {
                position: relative;
                margin-top: 40px;
            }

            @include breakpoint-upto($dev-width-sm) {
                width: auto;
                height: 100%;
                margin: 0;
            }
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