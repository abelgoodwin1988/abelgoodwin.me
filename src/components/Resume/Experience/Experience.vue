<template>
    <div id="experience">
        <template v-for="experience in experiences">
            <ExperienceCard class="experience-card" :experience="experience" v-bind:key="experience.company+experience.position"/>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ExperienceCard from './ExperienceCard.vue';
import { Prop } from 'vue/types/options';
import { Experience } from '@/assets/resume/resume.model';

export default Vue.extend({
    props: {
        experiences: Array as Prop<Experience[]>,
    },
    components: {
        ExperienceCard,
    },
});

</script>

<style lang="scss" scoped>
    .experience-card {
        padding: 1vmin 0;
        ;
    }
</style>
