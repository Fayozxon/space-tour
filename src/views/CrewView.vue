<script>

</script>

<template>
    <section class="crew-section">
        <div class="container">
            <h5 class="section-title fs-heading-100 ch-space-lg text-center-sm">
                <span class="number">02</span>
                Meet your crew
            </h5>
            <h1>Crew!</h1>
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
}
</style>