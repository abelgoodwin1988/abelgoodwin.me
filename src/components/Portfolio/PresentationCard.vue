<template>
    <div id="presentation-card">
        presentation-card
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as prType from '@/assets/portfolio/presentation.model';
import { Prop } from 'vue/types/options';
export default Vue.extend({
    props: {
        presentation: Object as Prop<prType.Presentation>,
    },
});
</script>

<style lang="scss" scoped>

</style>
