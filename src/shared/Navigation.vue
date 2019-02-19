<template>
    <div id="navigation">
        <div class="navigation-item">
            Home
        </div>
        <div class="navigation-item">
            Resume
        </div>
        <div class="navigation-item">
            Portfolio
        </div>
        <div class="navigation-item">
            Blog
        </div>
        <div class="navigation-item">
            Contact
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data(): {
        logo: string;
    } {
        return {
            logo: '@/assets/logo.gif',
        };
    },
});

</script>

<style lang="scss" scoped>
    #navigation{
        @include flex(row, flex-start, center);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 12vmin;
        background: rgba(0,0,0,.8);

        .navigation-item {
            height: 100%;
            width: 20vmin;
        }
    }
</style>
