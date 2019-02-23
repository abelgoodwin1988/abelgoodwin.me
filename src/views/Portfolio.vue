<template>
    <div id="portfolio">
        <div class="Portfolio">
            <PortfolioCard />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PortfolioCard from '@/components/Portfolio/PortfolioCard.vue';
export default Vue.extend({
    components: {
        PortfolioCard,
    },
});
</script>

<style lang="scss" scoped>
    #portfolio {

        .portfolio {

        }
    }
</style>
