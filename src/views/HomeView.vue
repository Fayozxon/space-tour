<script>
import {RouterLink} from "vue-router";
</script>

<template>
    <section class="home-section">
        <div class="container">
            <!-- Info -->
            <div class="home-section__info | text-center-md">
                <h5 class="subtitle | heading clr-accent ff-primary fs-heading-100 ch-space-lg">So, you want to travel to</h5>
                <h1 class="title | heading fs-heading-500">Space</h1>
                <p class="clr-accent fs-txt-300 line-height-txt">
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>

            <RouterLink to="/destination" class="home-section__btn | heading fs-heading-200 clr-primary-dark">
                Explore
            </RouterLink>
        </div>
        
        <!-- preloading images -->
        <!-- <img src="../assets/destination/image-moon.png" style="display: none;"> -->
    </section>
</template>

<style lang="scss" scoped>
@import '../main.scss';

.home-section {
    width: 100%;
    min-height: 100vh;
    background: url('../assets/home/background-home-desktop.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 30vh;

    @include breakpoint-upto($dev-width-md) {
        background-image: url('../assets/home/background-home-tablet.jpg');
        padding-top: 252px;
    }

    @include breakpoint-upto($dev-width-sm) {
        background-image: url('../assets/home/background-home-mobile.jpg');
        padding-top: 172px;
    }

    .container {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        @include breakpoint-upto($dev-width-md) {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
    }

    &__info {
        max-width: 444px;

        .subtitle {
            margin: 0;
        }

        .title {
            padding-top: 1.7rem;
            padding-bottom: 2rem;
        }
    }

    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 274px;
        height: 274px;
        border-radius: 50%;
        background: $clr-primary-100;
        text-decoration: none;
        transition: $transition-300;

        @include breakpoint-upto($dev-width-md) {
            margin-top: 7rem;
            margin-bottom: 7rem;
        }

        @include breakpoint-upto($dev-width-sm) {
            width: 150px;
            height: 150px;
            margin-top: 6rem;

            &:hover {
                box-shadow: 0 0 0 44px rgba(151, 151, 151, 0.2);
            }
        }

        &:hover {
            box-shadow: 0 0 0 88px rgba(151, 151, 151, 0.2);
        }
    }
}
</style>