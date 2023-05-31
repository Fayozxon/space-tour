<script>
import {RouterLink} from 'vue-router';

export default {
    data() {
        return {
            isNavVisible: false,
            navLinks: [
                { id: '00', path: '/', name: 'home' },
                { id: '01', path: '/destination', name: 'destination' },
                { id: '02', path: '/crew', name: 'crew' },
                { id: '03', path: '/technology', name: 'technology' }
            ]
        }
    }
}

</script>

<template>
    <header class="header">
        <div class="container">
            <!-- Logo -->
            <a href="/">
                <img src="../assets/logo.svg" alt="Logo" class="header__brand">
            </a>
            <!-- Navigation -->
            <div class="nav-bg"></div>
            <nav class="header__nav" :class="{open: isNavVisible}">
                <RouterLink
                    v-for="link in navLinks"
                    :to="link.path"
                    class="nav-link"
                    active-class="active"
                    @click="isNavVisible = false"
                >
                    <span class="number">{{ link.id }}</span>
                    {{ link.name }}
                </RouterLink>
            </nav>
            <!-- Hamburger Button -->
            <button
                class="header__btn"
                id="navExpandBtn"
                :class="{open: isNavVisible}"
                @click="isNavVisible = !isNavVisible"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '../main.scss';

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 2.5rem;
    z-index: 10;

    @include breakpoint-upto($dev-width-md) {
        padding: 0;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__brand {
        width: 3rem;
        // transform: translateX(-300%);
        z-index: 11;

        @include breakpoint-upto($dev-width-sm) {
            margin-top: 1.5rem;
            width: 2.3rem;
        }
    }

    .nav-bg {
        position: absolute;
        z-index: -1;
        top: 40px;
        right: 0;
        left: 42%;
        bottom: 0;
        background: $clr-transparent-100;
        backdrop-filter: blur(3rem);

        @include breakpoint-upto(1024px) {
            top: 0;

            &::before {
                display: none;
            }
        }

        @include breakpoint-upto(830px) {
            left: 32%;
        }

        @include breakpoint-upto($dev-width-sm) {
            display: none;
        }

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 5%;
            right: 60%;
            transform: translateX(-80%);
            height: 1px;
            background: $clr-primary-100;
            opacity: 0.25;
        }
    }

    &__nav {
        padding: 2.4rem 0;
        transition: $transition-300;

        @include breakpoint-upto($dev-width-sm) {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 35%;
            background: $clr-transparent-100;
            backdrop-filter: blur(3rem);
            display: flex;
            flex-direction: column;
            padding-left: 2rem;
            padding-top: 118px;
            transform: translateX(100%);

            &.open {
                transform: translateX(0);
            }

            .nav-link {
                padding: 1rem 0;
                &::before {
                    display: none;
                }
            }
        }

        .nav-link {
            position: relative;
            margin: 0 0.875rem;
            font-size: $fs-txt-200;
            text-decoration: none;
            letter-spacing: 2.7px;
            text-transform: uppercase;

            @include breakpoint-upto($dev-width-md) {
                font-size: $fs-txt-100;
            }

            @include breakpoint-upto($dev-width-sm) {
                font-size: $fs-txt-200;
            }

            .number {
                font-weight: $fw-bold;

                @include breakpoint-upto($dev-width-md) {
                    display: none;
                }

                @include breakpoint-upto($dev-width-sm) {
                    display: inline-block;
                }
            }

            &::before {
                content: '';
                position: absolute;
                left: 0;
                bottom: -42px;
                width: 0;
                height: 3px;
                background: $clr-primary-100;
                pointer-events: none;
                transition: $transition-300;
                opacity: 0.5;
            }

            &:hover::before {
                width: 98%;
            }

            &.active::before {
                width: 98%;
                opacity: 1;
            }
        }
    }

    &__btn {
        position: fixed;
        top: 2rem;
        right: 2rem;
        display: none;
        background: transparent;
        border: none;
        flex-direction: column;
        gap: 6px;
        cursor: pointer;
        z-index: 11;

        span {
            display: block;
            width: 24px;
            height: 3px;
            background: $clr-accent-400;
            transition: $transition-300;
        }

        @include breakpoint-upto($dev-width-sm) {
            display: flex;
        }

        &.open {
            span:nth-child(1) {
                transform: rotate(45deg) translateY(13px);
            }
            span:nth-child(2) {
                opacity: 0;
            }
            span:nth-child(3) {
                transform: rotate(-45deg) translateY(-13px);
            }
        }
    }
}

</style>