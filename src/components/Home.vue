<template>
    <div class="main-container-inner">
        <svg width="300" height="300" data-name="corner-top-left" xmlns="http://www.w3.org/2000/svg"
            style="pointer-events:none" data-inlinesvg=".inlineSvgFile-3">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0" class="gradient1"></stop>
                    <stop offset=".5" class="gradient2"></stop>
                    <stop offset="1" class="gradient1"></stop>
                </linearGradient>
            </defs>
            <path fill="url('#grad1')" d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"></path>
        </svg>
        <InnerHome />

        <svg class="svg_down" width="300" height="300" data-name="corner-bottom-right" xmlns="http://www.w3.org/2000/svg"
            style="pointer-events:none" data-inlinesvg=".inlineSvgFile-7">

            <defs>

                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0" class="gradient1"></stop>
                    <stop offset=".5" class="gradient2"></stop>
                    <stop offset="1" class="gradient1"></stop>
                </linearGradient>
            </defs>
            <text x="100" y="270" fill="gray" style="font-size: 13px;">@2024 built by EingineKhaing</text>
            <path fill="url('#grad2')" d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"></path>
        </svg>
    </div>
</template>

<script >
import InnerHome from './InnerHome.vue'

export default {

    name: "Home",
    components: {
        InnerHome
    },

}
</script>

<style lang="scss">
.main-container-inner {
    height: 100vh;
    max-height: 100vh;
    align-items: center;
    overflow: hidden !important;
    width: 100vw;
    background: #1d1d20;

}

.gradient1 {
    stop-color: var(--grad-1);
    transition: all .5s ease-in-out;
}

.gradient2 {
    stop-color: var(--grad-2);
}

.gradient3 {
    stop-color: var(--grad-1);
    transition: all .5s ease-in-out;
}

.main-container-inner:hover {

    .gradient1 {
        stop-color: var(--grad-2);
        transition: all .5s ease-in-out;
    }

    .gradient2 {
        stop-color: var(--grad-1);
    }

    .gradient3 {
        stop-color: var(--grad-2);
        transition: all .5s ease-in-out;
    }

}
</style>