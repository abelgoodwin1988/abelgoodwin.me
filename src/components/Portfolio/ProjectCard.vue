<template>
    <div id="project-card">
        project-card
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import * as pType from '@/assets/portfolio/portfolio.model';
export default Vue.extend({
    props: {
        project: Object as Prop<pType.Project>,
    },
});
</script>

<style lang="scss" scoped>

</style>
